const axios =require("axios")
const { Pokemon, Type } = require("../db")

const getPokemonApiByName = async (name) => {
    try{
        const response = await axios.get(`http://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        if(response){
            return {
                id: response.data.id,
                image: response.data.sprites.other.dream_world.front_default,
                name: response.data.name,
                life: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defending: response.data.stats[2].base_stat,
                speed: response.data.stats[5].base_stat,
                height: response.data.height,
                weight: response.data.weight,
                types: response.data.types.map(t => {
                    return {
                        name: t.type.name
                    }
                })
            };
        };
    }catch(error){
        return ({error});
    };
};

const getPokemonDbByName = async (name) => {
    try{
        return await Pokemon.findAll({
            where: {
                name: name
            },
            include:{
                model: Type,
                attributes: ["name"],
                through: { attributes: [] }
            }
        });
    }catch(error){
        return ({error});
    };
};

module.exports = {
    getPokemonApiByName,
    getPokemonDbByName
}
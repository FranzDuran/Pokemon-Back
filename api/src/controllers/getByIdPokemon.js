const { Pokemon, Type } = require("../db")
const axios = require("axios")


const getPokemonDbById = async (id) => {
    try{
        const uuid = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;
        if (uuid.test(id)){
            return await Pokemon.findByPk(id, {
                include: {
                    model: Type,
                    attributes: ["name"],
                    through: { attributes: [] }
                }
            });
        };
    }catch(error){
        return ({error});
    };
};

const getPokemonApiById = async (id) => {
    try{
        const response = await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`);
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
                    return {name: t.type.name}
                })
            };
        };
    }catch(error){
        return ({error})
    };
};

module.exports = {
    getPokemonApiById,
    getPokemonDbById
}

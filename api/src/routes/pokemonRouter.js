const {Router} = require("express")
const router = Router()
const { Pokemon, Type } = require("../db")
const {getAllPokemons} = require("../controllers/getAllPokemon")
const { getPokemonApiByName, getPokemonDbByName } = require("../controllers/getByNamePokemon")
const { getPokemonApiById, getPokemonDbById} = require("../controllers/getByIdPokemon")

router.get("/", async (req, res) => {
    const { name } = req.query;
    const allPokemons = await getAllPokemons();
    try{
        if(name){
            const pokemonApi = await getPokemonApiByName(name);
            if(pokemonApi.error){
                const pokemonDb = await getPokemonDbByName(name);
                if(!pokemonDb.length){
                    return res.status(404).json({message: "Pokemon not found"});
                }
                console.log(pokemonDb)
                return res.status(200).json(pokemonDb);
            }
            return res.status(200).json(pokemonApi);     
        }  
        return res.status(200).json(allPokemons);
    }catch(error){
        res.status(400).send({error: error.message});
    };
});

router.get("/:idPokemon", async (req, res) => {
    const {idPokemon} = req.params;
    try{
        if(idPokemon){
            const pokemonApi = await getPokemonApiById(idPokemon);
            if(pokemonApi.error){
                const pokemonDb = await getPokemonDbById(idPokemon);
                if(!pokemonDb || pokemonDb.error){
                    return res.status(400).send({message: "Id in database and api not found"});
                }
                return res.send(pokemonDb);
            }
            return res.status(200).send(pokemonApi);   
        }
        return res.status(400).send({message: "Id not found"});
    }catch(error){
        res.status(400).send({error: error.message});
    };
});


router.post("/", async (req, res) => {
    try{
        const { name, image, types, life, attack, defending, speed, height, weight } = req.body;
        if(name){
            const pokemon = await Pokemon.create({ name, image, life, attack, defending, speed, height, weight })
            
            const typesDb = await Type.findAll({
                where: {name: types}
            })
            
            await pokemon.addType(typesDb.map(a=> a))  
                        
            return res.status(200).send(pokemon)
        }
        return res.status(400).send({message: "Name is required"}) 
    }catch(error){
        res.status(400).send({error: error.message})
    }  
})


module.exports = router
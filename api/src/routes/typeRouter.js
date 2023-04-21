const { Router } = require("express");
const { Type } = require("../db")
const axios = require("axios")
const router = Router()

router.get("/", async (req, res, next) => {
    try{
        const allTypes = await Type.findAll();
        if(!allTypes.length){
            try{
                const response = await axios.get("https://pokeapi.co/api/v2/type");
                const allTypes = await response.data.results.map(t => { return {name: t.name}});
                await Type.bulkCreate(allTypes)
                return res.status(200).send(await Type.findAll());
            }catch(error){
                res.status(400).send({error: error.message});
            }
        }
        return res.status(200).send(allTypes);
    }catch(error){
        res.status(400).send({error: error.message});
    };
});

module.exports= router
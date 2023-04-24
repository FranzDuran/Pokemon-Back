import axios from "axios"

//const urlBack = "http://localhost:3001"
//const urlBack = "https://proyecto-pokemon-api.vercel.app"


export function getPokemons(){
    return async function(dispatch){
        const response = await axios.get(`/pokemon`);
        return dispatch({
            type: "GET_POKEMONS",
            payload: response.data
        })
    }
}
export function getNamePokemon(name){
    return async function(dispatch){
        try{
            const response = await axios.get(`/pokemon?name=${name}`)
            return dispatch({
                type: "GET_NAME_POKEMON",
                payload: response.data
            })
        }catch(error){
            console.error(error)
        }   
    }
}

export function getDetail(id){
    //console.log(id)
    return async function(dispatch){
        try{
            const response = await axios.get(`/pokemon/${id}`)
            return dispatch({
                type: "GET_DETAIL",
                payload: response.data
            })
        }catch(error){
            console.error(error)
        }
    }
}

export function getTypes(){
    return async function(dispatch){
        try{
            const response = await axios.get(`/type`)
            //console.log(response)
            return dispatch({
                type: "GET_TYPES",
                payload: response.data
            })
        }catch(error){
            console.error(error)
        }
    }
}
export async function postPokemon(payload){
    try{
        const response = await axios.post(`/pokemon`, payload)
        return response;
    }catch(error){
        console.error(error)
    }
}

export function filterPokemonsByTypes(payload){
    return {
        type: "FILTER_BY_TYPES",
        payload
    }
}
export function filterPokemonsCreated(payload){
    return{
        type: "FILTER_CREATED",
        payload
    }
}
export function orderByName(payload){
    return{
        type: "ORDER_BY_NAME",
        payload
    }
}
export function orderByAttack(payload){
    return{
        type: "ORDER_BY_ATTACK",
        payload
    }
}
export function delay(){
    return{
        type: "DELAY"
    }
}
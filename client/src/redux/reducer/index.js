const initialState = {
    allPokemons: [],
    pokemonsFilter: [],
    allTypes: [],
    detail: {}
}

function rootReducer(state=initialState, action){
    switch(action.type){
        case "GET_POKEMONS":
            return{
                ...state,
                allPokemons: action.payload,
                pokemonsFilter: action.payload
            }
        case "GET_NAME_POKEMON":
            return{
                ...state,
                allPokemons: Array.isArray(action.payload)? action.payload : [action.payload] 
            }
        case "POST_POKEMON":
            return{
                ...state
            }
        case "GET_TYPES":
            return{
                ...state,
                allTypes: action.payload
            }
        case "GET_DETAIL":
            return{
                ...state,
                detail: action.payload
            }
        case "FILTER_BY_TYPES":
            const pokemons = state.pokemonsFilter
            const typesFiltered = action.payload === "allType" ? pokemons : pokemons.filter(s => s.types.find(f=> f.name === action.payload))
            return{
                ...state,
                allPokemons: typesFiltered              
            }
        case "FILTER_CREATED":
            const pokes = state.pokemonsFilter
            const createdFilter = action.payload === "db" ? pokes.filter(c=> c.createdInDb): pokes.filter(c=> !c.createdInDb)
            return{
                ...state,
                allPokemons: action.payload === "allPoke" ? state.pokemonsFilter : createdFilter
            }
        case "ORDER_BY_NAME":
            const orden = action.payload === "asc" ? 
            state.allPokemons.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                return 0;
            }) :
            state.allPokemons.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                return 0;
            })
            return{
                ...state,
                allPokemons: orden
            }
        case "ORDER_BY_ATTACK":
            const orderByAttack = action.payload === "max" ?
            state.allPokemons.sort(function(a,b){
                if(a.attack > b.attack) return -1;
                if(a.attack < b.attack) return 1;
                return 0;
            }) :
            state.allPokemons.sort(function(a, b){
                if(a.attack > b.attack) return 1;
                if(a.attack < b.attack) return -1;
                return 0;
            })
            return{
                ...state,
                allPokemons: orderByAttack
            }
            case "DELAY": 
            return{
                ...state,
                detail: {}
            }
        default: 
            return state
    }

}

export default rootReducer;
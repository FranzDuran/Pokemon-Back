import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNamePokemon } from "../../redux/action";
import style from "./SearchBar.module.css"
import lupa from "./assets/buscar.png";

export default function SearchBar({ setResults }) {

    const pokemons = useSelector((state) => state.allPokemons)

    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [, setCurrentPage] = useState(1);


    /*----fn para filtrar los nombres de pokemons por nombre q vienen del estado global 
    ----------------y compararlos con el valor del estado local----- */
    const fetchData = (e) => {
        const results = pokemons.filter((user) => {
            return (
                e.target.value &&
                user &&
                user.name &&
                user.name.toLowerCase().includes(e.target.value)
            );
        });
        setResults(results);
    };

    function handleNamePokemon(e) {
        e.preventDefault()
        setName(e.target.value)
        fetchData(e)
    }

/*----fn para buscar con el boton lupa----- */
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNamePokemon(name))
        setCurrentPage(1)
    }

/*-----fn para buscar haciendo Enter ------*/
    function handleKeyPress(e) {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    }


    return (
        <div className={style.container}>
            <input type={"text"}
                placeholder={"Search pokemon..."}
                value={name}
                onChange={(e) => handleNamePokemon(e)}
                onKeyPress={handleKeyPress} />

            <button type="submit"
                onClick={(e) => handleSubmit(e)}
            ><img src={lupa} alt="lupa" /></button>
        </div>

    )
}
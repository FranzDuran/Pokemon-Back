import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, filterPokemonsByTypes, filterPokemonsCreated, orderByName, orderByAttack } from "../../redux/action"
import Paginado from "../../components/Paginado/Paginado";
import Cards from "../../components/card/Cards";
import Filter from "../../components/Filter/Filter";
import Loading from "../../components/Loading/Loading";
import style from "./home.module.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import { SearchResultsList } from "../../components/SearchBar/SearchResultsList"
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer"


const Home = () => {
    const dispatch = useDispatch();
    const allPokes = useSelector((state) => state.allPokemons);

    /*----estado de SearchResultsList----  */
    const [results, setResults] = useState([]);

    const [order, setOrder] = useState("")

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);
    const indexOfLastPokemons = currentPage * pokemonsPerPage;
    const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage;
    const currentPokemons = allPokes.slice(indexOfFirstPokemons, indexOfLastPokemons);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons())
    }

    /*---------------FILTROS---------------*/
    function handleFilterTypes(e) {
        e.preventDefault();
        dispatch(filterPokemonsByTypes(e.target.value))
    }

    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterPokemonsCreated(e.target.value))
        setCurrentPage(1)
    }

    /*--------------ORDENAMIENTOS--------------- */
    function handleOrder(e) {
        if (e.target.value === "asc" || e.target.value === "desc") {
            e.preventDefault();
            dispatch(orderByName(e.target.value))
            setCurrentPage(1)
            setOrder(`ordenado ${order} ${e.target.value}`)
        } else {
            e.preventDefault()
            dispatch(orderByAttack(e.target.value))
            setCurrentPage(1)
            setOrder(`ordenado ${order} ${e.target.value}`)
        }
    }

    return (
        <>
            <NavBar />
            <div className={style.home}>
                <div className={style.searchBar}>
                    <SearchBar setResults={setResults} />
                    {results && results.length > 0 &&
                        <div className={style.searchResultsList}><SearchResultsList results={results} /></div>}
                </div>

                <div className={style.filter}>
                    <Filter
                        handleFilterTypes={handleFilterTypes}
                        handleFilterCreated={handleFilterCreated}
                        handleOrder={handleOrder}
                        handleClick={handleClick}
                    />
                </div>

                {allPokes.length ?
                    <div className={style.containerPaginado}>
                        {/* <div className={style.paginado}> */}
                            <Paginado
                                allPokes={allPokes.length}
                                pokemonsPerPage={pokemonsPerPage}
                                paginado={paginado}
                            />
                        {/* </div> */}

                        {/* <div className={style.cards}> */}
                            <Cards currentPokemons={currentPokemons} />
                       {/*  </div> */}
                    </div> : <Loading />}
            </div>
            <Footer />
        </>
    )
}

export default Home;


/* function handleOrderName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`ordenado ${order} ${e.target.value}`)
    }

    function handleOrderByAttack(e) {
        e.preventDefault()
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1)
        setAttack(`ordenado${attack} ${e.target.value}`)
    } */
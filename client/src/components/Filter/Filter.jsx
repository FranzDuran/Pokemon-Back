import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../redux/action";
import style from "./Filter.module.css"
import actualizar from "./assets/actualizar.png"

export default function Filter({ handleFilterTypes, handleFilterCreated, handleOrder, handleClick }) {
    const types = useSelector((state) => state.allTypes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])


    return (
        <div className={style.filter}>

            <div className={style.filterSelect}>
                FILTER
                <select onChange={e => handleFilterTypes(e)}>
                    <option value={"allType"}>all Types</option>
                    {types.map(type =>
                        <option key={type.id} value={type.name}> {type.name}</option>)}
                </select>

                <select onChange={(e) => handleFilterCreated(e)}>
                    <option value={"allPoke"}>All Pokemons</option>
                    <option value={"api"}>Api pokemons</option>
                    <option value={"db"}>Db pokemons</option>
                </select>
            </div>

            <div className={style.filterSelect}>
                ORDER
                <select onChange={(e) => handleOrder(e)}>
                    <option value={"asc"}>A to Z</option>
                    <option value={"desc"}>Z to A</option>
                    <option value={"max"}>High attack</option>
                    <option value={"min"}>Low attack</option>
                </select>
            </div>

      
                <button className={style.refreshButton}
                    onClick={e => { handleClick(e) }}>
                    <img src={actualizar} alt="actualizar" />
                </button>
            
        </div>
    )
}




/* <select className={style.select} onChange={e => handleFilterTypes(e)}>
        <option >Select Types</option>
        <option value={"allType"}>all Types</option>
        <option value={"normal"}>normal</option>
        <option value={"fighting"}>fighting</option>
        <option value={"flying"}>flying</option>
        <option value={"poison"}>poison</option>
        <option value={"ground"}>ground</option>
        <option value={"rock"}>rock</option>
        <option value={"bug"}>bug</option>
        <option value={"ghost"}>ghost</option>
        <option value={"steel"}>steel</option>
        <option value={"fire"}>fire</option>
        <option value={"water"}>water</option>
        <option value={"grass"}>grass</option>
        <option value={"electric"}>electric</option>
        <option value={"psychic"}>psychic</option>
        <option value={"ice"}>ice</option>
        <option value={"dragon"}>dragon</option>
        <option value={"dark"}>dark</option>
        <option value={"fairy"}>fairy</option>
        <option value={"unknown"}>unknown</option>
        <option value={"shadow"}>shadow</option>
    </select> */

/* <select className={style.select} onChange={(e) => handleOrderName(e)}>
        <option > Order:</option>
        <option value={"asc"}>A to Z</option>
        <option value={"desc"}>Z to A</option>
    </select> */

/* <select className={style.select} onChange={(e) => handleOrderByAttack(e)}>
        <option > Order by strength </option>
        <option value={"max"}>High attack</option>
         <option value={"min"}>Low attack</option>
    </select> */
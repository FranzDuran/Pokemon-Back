import React from "react";
import { NavLink } from "react-router-dom";
import "./landingPage.css"
import image from "./assets/pokemon.jpg"
import poke from "./assets/pokebola.gif"

const LandingPage = () => {
    return (
        <>
        <div className="container">
            <div className="container-info">
                <p >Welcome to the</p>
                <h3 >POKEMON APP</h3>
                <NavLink to={"/home"} className="button">Lest´s go!</NavLink>
            </div>
            <img src={image} alt="Pokemon" className="container-img" />
        </div>
        <div className="container-responsive">
        <p className="parrafo">Welcome to the</p>
        <h3 className="tittle">POKEMON APP</h3>
        <NavLink to={"/home"} className="button">Lest´s go!</NavLink>
        <img src={poke} alt="Pokemon" className="img" />
    </div></>
        
    )
}
export default LandingPage;
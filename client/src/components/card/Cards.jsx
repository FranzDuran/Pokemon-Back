import React from "react";
import Card from "./Card";
//import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./card.css"
import { Link } from "react-router-dom";

export default function Cards({ currentPokemons }) {
    return (
        <div className="cards-container">
            {currentPokemons?.map(poke => {
                return (
                    <Fragment key={poke.id}>
                        <Link to={"/pokemon/" + poke.id}   className="container-a">
                        <Card name={poke.name}
                                image={poke.image}
                                types={poke.types}
                                attack={poke.attack}
                                key={poke.id}
                            /></Link>
                    </Fragment>
                )
            })}
        </div>
    )
}


/* <a className="container-a" href={"/pokemon/" + poke.id}>
                            <Card name={poke.name}
                                image={poke.image}
                                
                                types={poke.types}
                                attack={poke.attack}
                                key={poke.id}
                            />
                        </a> */
/* types={poke.types.map(t => t.name).join(" ")} */
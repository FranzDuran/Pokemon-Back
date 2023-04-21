import React from "react";
import "./card.css"

export default function Card({ image, name, types, attack }) {
    
    return (
        <div className="card-container">
            <div className="card-img">
                <img src={image} alt="img not found" />
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <span className="pokemon-attack">Attack: {attack}</span>
                <div className="card-types">
                    {types.map((t,id) => 
                        <span className={t.name} key={id}>{t.name}</span>)}
                </div>
            </div>

        </div>
    )
}
import React from "react";
import "./Paginado.module.css"

export default function Paginado({ allPokes, pokemonsPerPage, paginado }) {
    const pageNumbers = [];
    for (let i = 0; i <= Math.floor(allPokes / pokemonsPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <nav>
            <ul>
                {
                    pageNumbers && pageNumbers.map(number => (
                        <li key={number.toString()}>
                            <button onClick={() => paginado(number)}>{number}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
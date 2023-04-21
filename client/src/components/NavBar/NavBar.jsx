import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css"
import poke from "./assets/poke.png"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="navbar">
            <div className="nav_logo">
                <img src={poke} alt="Not found" />
            </div>

            <div className={`nav_items ${isOpen && "open"}`}>
                <Link to={"/home"}><button>HOME</button></Link>
                <Link to={"about"}><button>ABOUT ME</button></Link>
                <Link to={"/create"} ><button >CREATE</button></Link>
            </div>

            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
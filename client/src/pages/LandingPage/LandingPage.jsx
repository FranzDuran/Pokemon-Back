import React from "react";
import { NavLink} from "react-router-dom";
import style from "./landingPage.module.css"

const LandingPage = () =>{
    return(
        <React.Fragment>
            <div className={style.container}>
            <h1 className={style.title}>Polemon App</h1>
            <NavLink to={"/home"}><div className={style.button}><button className={style.btn}>Start</button></div></NavLink>
            </div>
            
        </React.Fragment>        
    )
}
export default LandingPage;
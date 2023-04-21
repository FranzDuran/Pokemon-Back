import React from "react";
import logo from "./assets/loading.gif"
import style from "./loading.module.css"

export default function Loading(){
    return (
      <div className={style.loading}>
        <img
          src={logo}
          alt="loading..."
        />
      </div>
    );
};
  
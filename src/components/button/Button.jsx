import React from "react";
import style from './button.module.css';

function button(label){
    return (
        <button className={style.btn}>{label}</button>
    )
}

export default button;
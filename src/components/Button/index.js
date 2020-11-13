import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Button = (props) => {
    let className = style.button;
    if (props.color=='green') { 
        className = className + " " + style["button-green"]
    }
    console.log(props)
    return (
        <Link to={props.to} className={className}>
            {props.children}
            
        </Link> 
    )

}

export default Button
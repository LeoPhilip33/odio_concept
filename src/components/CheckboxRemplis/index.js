import React from 'react'
import Remplis from '../img/remplis.svg';
import './Checkbox.css'



const CheckboxRemplis = ({text}) => {
    return (

        <div className="align_form">
            <div className="style_form_in">
                <img className="Checkbox" src={Remplis} alt="" /> 
            <div >{text}</div>
            </div>
        </div>


    )
   
}

export default CheckboxRemplis 
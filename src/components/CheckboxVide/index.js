import React from 'react'
import Vide from '../img/vide.svg';
import'../CheckboxRemplis/Checkbox.css'



const CheckboxVide = ({text}) => {
    return (

        <div className="align_form">
            <div className="style_form_in">
                <img className="Checkbox" src={Vide} alt="" /> 
            {text}
            </div>
        </div>


    )
   
}

export default CheckboxVide 
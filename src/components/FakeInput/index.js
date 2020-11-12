qimport React from 'react'
import Vide from '../img/vide.svg';
import Remplis from '../img/remplis.svg';



const FakeInput = ({text, vide, remplis}) => {
    return (

        <div>
           <img src={Remplis} alt="" /> 
           {text}
           <img src={Vide} alt="" /> 
        </div>


    )
   
}

export default FakeInput 
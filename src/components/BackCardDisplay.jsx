
import React, { useContext } from 'react'
// import BackCardImg from "../resources/images/bg-card-front.png";
import { FormContext } from '../context/FormCardContext';
import BackCard from "../images/bg-card-back.png";
import "../styles/BackCardDisplay.css";


const BackCardDisplay = () => {

  const { cvv } = useContext(FormContext);

  return (
    <div className="BackCardImg">
      <img src={BackCard} alt="front-side-of-card"/>
      
       <div className="backcardinfo">{cvv}</div> 
    </div>
  )
}

export default BackCardDisplay
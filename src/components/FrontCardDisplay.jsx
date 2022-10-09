import React, { useContext } from 'react'
import { FormContext } from '../context/FormCardContext';
import FrontCard from "../images/bg-card-front.png";
import "../styles/FrontCardDisplay.css";



const FrontCardDisplay = () => {
  const {cardholder, cardnumber} = useContext(FormContext);
  return (
    <div className="FrontCardImg">
      <img src={FrontCard} alt="front-side-of-card"/>
      <div className="frontcardinfo">{cardholder}{cardnumber}</div>
    </div>
  )
}

export default FrontCardDisplay
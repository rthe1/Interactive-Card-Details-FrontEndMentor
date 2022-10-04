import React, { useContext } from 'react'
// import FrontCardImg from "../resources/images/bg-card-front.png";
import { FormContext } from '../context/FormCardContext';


const CardDisplay = () => {
  const {cardholder, cardnumber} = useContext(FormContext);
  return (
    <div className="FrontCardImg">
      {cardnumber}
    </div>
  )
}

export default CardDisplay
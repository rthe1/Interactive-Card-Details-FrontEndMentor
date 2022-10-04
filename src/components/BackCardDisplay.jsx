
import React, { useContext } from 'react'
// import BackCardImg from "../resources/images/bg-card-front.png";
import { FormContext } from '../context/FormCardContext';

const CardDisplay = () => {

  const {cvv} = useContext(FormContext);

  return (
    <div className="BackCardImg">
      {cvv}
    </div>
  )
}

export default CardDisplay
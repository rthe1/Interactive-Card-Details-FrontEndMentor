import React, { useContext } from 'react';
import { FormContext } from '../context/FormCardContext';


const Form = () => {

  const {updateCVV, updateCardHolder, updateCardNumber} = useContext(FormContext)

  return (
    <div>
        <form>
        <label for="chname">Cardholder Name:</label><br />
        <input type="text" id="chname" name="chname" onChange={e => updateCardHolder(e.target.value)} /><br />
        <label for="fname">Card Number:</label><br />
        <input type="text" id="fname" name="fname" onChange={e => updateCardNumber(e.target.value)}/><br />
        <label for="fname">Exp. Date:</label><br />
        <input type="text" id="fname" name="fname" onChange={e => (e.target.value)}/><br />
        <label for="fname">CVC:</label><br />
          <input type="text" id="fname" name="fname" onChange={e => updateCVV(e.target.value)}/><br />
          </form>
    </div>
        )
}

        export default Form
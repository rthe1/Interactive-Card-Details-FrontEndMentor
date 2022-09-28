import React from 'react'

const Form = () => {
  return (
    <div>
        <form>
        <label for="chname">Cardholder Name:</label><br />
        <input type="text" id="chname" name="chname" onChange={e => e.preventDefault} /><br />
        <label for="fname">Card Number:</label><br />
        <input type="text" id="fname" name="fname" onChange={e => e.preventDefault}/><br />
        <label for="fname">Exp. Date:</label><br />
        <input type="text" id="fname" name="fname" onChange={e => e.preventDefault}/><br />
        <label for="fname">CVC:</label><br />
          <input type="text" id="fname" name="fname" onChange={e => e.preventDefault}/><br />
          </form>
    </div>
        )
}

        export default Form
import { useState, createContext } from "react";

export const FormContext = createContext({});

export const FormContextProvider = (props) => {

  const [cardholder, setCardholder] = useState("Reshawn");
  const [cvv, setCVV] = useState(123);
  const [cardnumber, setCardnumber] = useState(12345678900);


  const updateCardHolder = (e) => { setCardholder(e) };
  const updateCardNumber = (e) => { setCardnumber(e) }
  const updateCVV = (e) => { setCVV(e) }

  return (
    <FormContext.Provider value={{ updateCVV, updateCardHolder, updateCardNumber, cardholder, cvv, cardnumber }}>
      {props.children}
    </FormContext.Provider>
  )
}

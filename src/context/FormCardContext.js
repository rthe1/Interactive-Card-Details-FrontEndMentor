import { useContext, useState, createContext } from "react";

const FormContext = createContext({});

export function useFormContext () {
 return useContext(FormContext);
}







export function FormContextProvider (children) {

  const [cardholder, setCardholder] =  useState();
const [cvv, setCVV] =  useState();
const [cardnumber, setCardnumber] =  useState();


const updateCardHolder = (e) => {setCardholder(e)};
const updateCardNumber = (e) => {setCardnumber(e)}
const updateCVV = (e) => {setCVV(e)}

  return (
    <FormContext.Provider value={{updateCVV, updateCardHolder, updateCardNumber}}>
      {children}
    </FormContext.Provider>
  )
}

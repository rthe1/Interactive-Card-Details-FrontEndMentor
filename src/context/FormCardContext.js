import { dividerProps } from "ant-design-vue/lib/divider";
import { useContext, createContext } from "react";

const FormContext = createContext({});

export function useFormContext () {
 return useContext(FormContext);
}




export function FormContextProvider (children) {
  return (
    <FormContext.Provider value={{}}>
      {children}
    </FormContext.Provider>
  )
}

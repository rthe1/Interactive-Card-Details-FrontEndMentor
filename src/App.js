import React from "react";
import {FormContextProvider} from "./context/FormCardContext";
import Form from './components/Form';


import FrontCardDisplay from "./components/FrontCardDisplay";
import BackCardDisplay from "./components/BackCardDisplay";
function App() {

  return (
    <FormContextProvider>
<div>
<Form></Form>    
</div>
<div>
<FrontCardDisplay></FrontCardDisplay>
<BackCardDisplay></BackCardDisplay>
</div>
    </FormContextProvider>
  );
}

export default App;

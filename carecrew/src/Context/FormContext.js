import React, { useState } from "react";
import App from "../App"

export const multiStepContext = React.createContext();


function FormContext() {
    
    const [closeForm, setCloseForm] = useState(true);
    const [closeForm1, setCloseForm1] = useState(false);
  
  return (
    <div>
      <multiStepContext.Provider
        value={{
            closeForm, setCloseForm,
            closeForm1, setCloseForm1
        }}
      >
        <App/>
      </multiStepContext.Provider>
    </div>
  );
}

export default FormContext;

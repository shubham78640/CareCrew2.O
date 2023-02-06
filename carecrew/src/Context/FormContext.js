import React, { useState } from "react";
import App from "../App"

export const multiStepContext = React.createContext();


function FormContext() {
    
    const [closeForm, setCloseForm] = useState(true);
  
  return (
    <div>
      <multiStepContext.Provider
        value={{
            closeForm, setCloseForm
        }}
      >
        <App/>
      </multiStepContext.Provider>
    </div>
  );
}

export default FormContext;

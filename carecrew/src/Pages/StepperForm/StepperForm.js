import React, { useState } from "react";

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const SUBMIT = () =>{}

  return (
    <div style={{position:"absolute", top:"200px"}}>
      {step === 1 && (
        <div>
          {/* Step 1 content */}
           <input type="text" />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          {/* Step 2 content */}
          <input type="text" name="" id="" />
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          {/* Step 3 content */}
          <input type="text" />
          <button onClick={handleBack}>Back</button>
          <button onClick={() => SUBMIT()}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default StepperForm;

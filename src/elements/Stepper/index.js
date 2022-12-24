import React, { useState } from "react";
import StepNavigation from "./StepNaviagation";
import "./Stepper.scss";
function Stepper() {
  const labelArray = [
    "Detail Page ",
    "Booking Page ",
    "Equipment Page ",
    "Payment Page",
    "Success",
  ];
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }

  return (
    <div className="Stepper">
      <StepNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      ></StepNavigation>
      <button
        className="primaryButton"
        disabled={currentStep === 1}
        onClick={() => updateStep(currentStep - 1)}
      >
        Previous Step
      </button>
      <button
        className="primaryButton"
        disabled={currentStep === labelArray.length}
        onClick={() => updateStep(currentStep + 1)}
      >
        Next Step
      </button>
    </div>
  );
}

export default Stepper;

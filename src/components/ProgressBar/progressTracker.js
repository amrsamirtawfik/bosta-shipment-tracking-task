import React, { useState } from "react";
import {
  ProgressTrackerUL,
  ProgressDiv,
  ProgressTrackerLI,
} from "./progressTrackerElements";

function ProgressTracker({ config }) {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <ProgressTrackerUL>
      {config.steps.map((step, index) => (
        <ProgressTrackerLI
          key={index}
          onClick={() => handleStepClick(index + 1)}
        >
          <ProgressDiv
            activeColor={
              activeStep >= index + 1 ? config.activeColor : "#CCCCCC"
            }
            className={`item${index + 1}`}
            dimension={activeStep>=index+1? '50px':'30px'}
            isArabic={config.isArabic}
          >
            {activeStep >= index + 1
              ? step.activeStep // Render the provided SVG component
              : step.nonActiveStep}
          </ProgressDiv>
          <p className="text">{step.label}</p>
        </ProgressTrackerLI>
      ))}
    </ProgressTrackerUL>
  );
}

export default ProgressTracker;

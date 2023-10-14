import React, { useState } from "react";
import {
  MainDiv,
  ProgressTrackerUL,
  ProgressDiv,
  ProgressTrackerLI,
  TextDiv,
} from "./progressTrackerElements";

function ProgressTracker({ config }) {
  const activeStep = config.numberOfActiveSteps;

  return (
    <MainDiv>
      <ProgressTrackerUL>
        {config.steps.map((step, index) => (
          <ProgressTrackerLI key={index}>
            <ProgressDiv
              activeColor={
                activeStep >= index + 1 ? config.activeColor : "#CCCCCC"
              }
              className={`item${index + 1}`}
              dimension={activeStep >= index + 1 ? "50px" : "30px"}
              isArabic={config.isArabic}
            >
              {activeStep >= index + 1
                ? step.activeStep // Render the provided SVG component
                : step.nonActiveStep}
            </ProgressDiv>
          </ProgressTrackerLI>
        ))}
      </ProgressTrackerUL>
      <TextDiv>
        {config.steps.map((step, index) => (
          index===2? <div>
            <p>{step.label}</p>
            <p style={{color:config.activeColor}}>{config.activeMsg} </p>
          </div>:
          <p className="text" key={index}>
            {step.label}
          </p>
        ))}
      </TextDiv>
    </MainDiv>
  );
}

export default ProgressTracker;

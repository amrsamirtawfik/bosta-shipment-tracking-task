import React from 'react';

const ProgressTracker = ({ currentStage, stagesData }) => {
  return (
    <div className="progress-tracker">
      {stagesData.map((stage, index) => (
        <div
          key={index}
          className={`stage ${index <= currentStage ? 'completed' : 'incomplete'}`}
        >
          <img
            src={stage.photo}
            alt={`Stage ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;

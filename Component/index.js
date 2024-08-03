import React, { useState } from 'react';
import './style.css';

const Stepper = ({ size = 'md', activeColor = '#4caf50', inactiveColor = '#ccc', lineColor = '#ccc', labels, icons }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < labels.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isCustomSize = !['sm', 'md', 'lg'].includes(size);
  const customSizeValue = isCustomSize ? size : null;
  const customStyles = isCustomSize ? {
    '--step-icon-size': `${customSizeValue}`,
    '--step-line-length': `${parseInt(customSizeValue) * 1.6}px`,
    '--step-font-size': `${parseInt(customSizeValue) * 0.6}px`
  } : {};

  const stepperClass = isCustomSize ? 'stepper-custom' : `stepper-${size}`;

  return (
    <div className={`stepper ${stepperClass}`} style={customStyles}>
      <div className="stepper-header">
        {labels.map((label, index) => (
          <div key={index} className={`step ${index === currentStep ? 'active' : ''}`}>
            <div className="step-icon" style={{
              backgroundColor: index <= currentStep ? activeColor : inactiveColor,
              color: index <= currentStep ? '#fff' : '#000'
            }}>
              {icons[index]}
            </div>
            {index < labels.length - 1 && (
              <div className="step-line" style={{
                backgroundColor: index < currentStep ? activeColor : lineColor
              }}></div>
            )}
          </div>
        ))}
      </div>
      <div className="stepper-content">
        <h1>{labels[currentStep]}</h1>
        <div>{/* Content for each step can be dynamic based on the step */}</div>
      </div>
      <div className="stepper-buttons">
        {currentStep > 0 && (
          <button onClick={prevStep}>
            Previous
          </button>
        )}
        {currentStep < labels.length - 1 ? (
          <button onClick={nextStep}>
            Next
          </button>
        ) : (
          <button onClick={() => alert('Form Submitted')}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;

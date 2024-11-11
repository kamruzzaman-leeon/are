import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Location from './Location';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import TargetAudience from './TargetAudience';

const Timeline = () => {
  const [step, setStep] = useState(1); // Track the current step in the form
  const [formData, setFormData] = useState({}); // Store the form data

  const handleNext = () => setStep(step + 1); // Go to the next step
  const handleBack = () => setStep(step - 1); // Go back to the previous step

  // Define the steps and their respective components
  const steps = [
    { label: 'Personal Info', component: <PersonalInfo formData={formData} setFormData={setFormData} /> },
    { label: 'Location', component: <Location formData={formData} setFormData={setFormData} /> },
    { label: 'About', component: <About formData={formData} setFormData={setFormData} /> },
    { label: 'Education', component: <Education formData={formData} setFormData={setFormData} /> },
    { label: 'Experience', component: <Experience formData={formData} setFormData={setFormData} /> },
    { label: 'Skills', component: <Skills formData={formData} setFormData={setFormData} /> },
    { label: 'Target Audience', component: <TargetAudience formData={formData} setFormData={setFormData} /> },
  ];

  return (
    <div className="card card-body card-bordered max-w-3xl mx-auto p-8">
      {/* Steps Navigation (Horizontal) */}
      <div className="flex items-center justify-between mb-6">
        {steps.map((stepData, index) => (
          <div
            key={index}
            className={`step text-center flex-1 py-2 cursor-pointer transition-colors duration-300 
            ${step === index + 1 ? 'text-white btn bg-blue-600' : 'text-gray-700 hover:bg-blue-200'}`}
            onClick={() => setStep(index + 1)}
          >
            <span className="block">{stepData.label}</span>
          </div>
        ))}
      </div>

      {/* Current Step Component */}
      <div className="mt-6">{steps[step - 1].component}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {step > 1 && (
          <button onClick={handleBack} className="btn btn-secondary text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-md">
            Back
          </button>
        )}
        {step < steps.length ? (
          <button onClick={handleNext} className="btn btn-primary text-white bg-green-500 hover:bg-green-700 py-2 px-4 rounded-md">
            Next
          </button>
        ) : (
          <button className="btn btn-success text-white bg-indigo-600 hover:bg-indigo-800 py-2 px-4 rounded-md">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Timeline;

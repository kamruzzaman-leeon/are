import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PersonalInfo from './PersonalInfo';
import Location from './Location';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import TargetAudience from './TargetAudience';

const Timeline = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [acknowledged, setAcknowledged] = useState(false); // Track if the user acknowledged the data

  // React Hook Form setup
  const { handleSubmit, control, setValue, watch, formState: { errors } } = useForm();
  const formData = watch(); // Get the current form data

  // Next and Previous Step Functions
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  // Define steps and their respective components
  const steps = [
    { label: 'Personal Info', component: <PersonalInfo control={control} errors={errors} /> },
    { label: 'Location', component: <Location control={control} errors={errors} /> },
    { label: 'About', component: <About control={control} errors={errors} /> },
    { label: 'Education', component: <Education control={control} errors={errors} /> },
    { label: 'Experience', component: <Experience control={control} errors={errors} /> },
    { label: 'Skills', component: <Skills control={control} errors={errors} /> },
    { label: 'Target Audience', component: <TargetAudience control={control} errors={errors} /> },
    {
      label: 'Review & Submit',
      component: (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Review Your Information</h2>
          
          {/* Personal Information Section */}
          <div>
            <h3 className="font-medium text-xl">Personal Information</h3>
            <p><strong>Age Range:</strong> {formData.ageRange}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
            <p><strong>Disability:</strong> {formData.disability ? 'Yes' : 'No'}</p>
            <p><strong>Contact Number:</strong> {formData.contactNumber}</p>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="font-medium text-xl">Location</h3>
            <p><strong>Location:</strong> {formData.location}</p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-medium text-xl">About You</h3>
            <p>{formData.about}</p>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="font-medium text-xl">Education</h3>
            {formData.education?.map((edu, index) => (
              <div key={index} className="space-y-2">
                <p><strong>School:</strong> {edu.school}</p>
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>Field of Study:</strong> {edu.fieldOfStudy}</p>
                <p><strong>Start Date:</strong> {edu.startDate} - <strong>End Date:</strong> {edu.endDate}</p>
                <p><strong>Grade:</strong> {edu.grade}</p>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="font-medium text-xl">Experience</h3>
            {formData.experience?.map((exp, index) => (
              <div key={index} className="space-y-2">
                <p><strong>Year:</strong> {exp.year}</p>
                <p><strong>Comment:</strong> {exp.comment}</p>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="font-medium text-xl">Skills</h3>
            <p>{formData.skills}</p>
          </div>

          {/* Target Audience Section */}
          <div>
            <h3 className="font-medium text-xl">Target Audience</h3>
            <p>{formData.targetAudience}</p>
          </div>

          {/* Acknowledgment Checkbox */}
          <div className="mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={acknowledged}
                onChange={() => setAcknowledged(!acknowledged)}
              />
              <span>I confirm that the information provided is correct</span>
            </label>
          </div>
        </div>
      ),
    },
  ];

  // Submit handler
  const onSubmit = () => {
    if (acknowledged) {
      // Handle form submission (e.g., save the data to a database or API)
      console.log('Form submitted:', formData);
    } else {
      alert('Please acknowledge that the information is correct.');
    }
  };

  return (
    <div className="card card-body card-bordered max-w-3xl mx-auto p-8">
      {/* Steps Navigation (Horizontal) */}
      <div className="flex flex-wrap space-x-2 items-center justify-between mb-6">
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
          <button
            onClick={handleSubmit(onSubmit)}
            className="btn btn-success text-white bg-indigo-600 hover:bg-indigo-800 py-2 px-4 rounded-md"
            disabled={!acknowledged}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Timeline;

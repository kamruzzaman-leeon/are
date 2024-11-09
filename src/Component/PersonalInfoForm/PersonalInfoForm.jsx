// PersonalInfoForm.js
import React from 'react';
import { Controller } from 'react-hook-form';

const PersonalInfoForm = ({ control }) => {
  return (
    <div>
      <h3>Personal Information</h3>
      <Controller
        name="personalInfo.ageRange"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="">Select Age Range</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46+">46+</option>
          </select>
        )}
      />
      <Controller
        name="personalInfo.gender"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        )}
      />
      <Controller
        name="personalInfo.disability"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="">Disability Status</option>
            <option value="none">None</option>
            <option value="yes">Yes</option>
          </select>
        )}
      />
    </div>
  );
};

export default PersonalInfoForm;

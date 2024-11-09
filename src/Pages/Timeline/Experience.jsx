import React, { useState } from 'react';

const Experience = ({ formData, setFormData }) => {
  const [experiences, setExperiences] = useState(formData.experience || []);

  const handleAddExperience = () => {
    setExperiences([...experiences, { year: '', comment: '' }]);
  };

  const handleChangeExperience = (index, field, value) => {
    const updatedExperience = [...experiences];
    updatedExperience[index][field] = value;
    setExperiences(updatedExperience);
    setFormData((prev) => ({ ...prev, experience: updatedExperience }));
  };

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <div key={index} className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <input
              type="text"
              value={exp.year}
              onChange={(e) => handleChangeExperience(index, 'year', e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter year"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              value={exp.comment}
              onChange={(e) => handleChangeExperience(index, 'comment', e.target.value)}
              className="textarea textarea-bordered w-full"
              placeholder="Describe your experience"
            ></textarea>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddExperience}
        className="btn btn-outline mt-4"
      >
        Add Experience
      </button>
    </div>
  );
};

export default Experience;

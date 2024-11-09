import React from 'react';

const Skills = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Skills</label>
        <textarea
          name="skills"
          value={formData.skills || ''}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          placeholder="Enter your skills"
        ></textarea>
      </div>
    </div>
  );
};

export default Skills;

import React from 'react';

const About = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">About You</label>
        <textarea
          name="about"
          value={formData.about || ''}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          placeholder="Write a brief about yourself"
        ></textarea>
      </div>
    </div>
  );
};

export default About;

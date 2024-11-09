import React from 'react';

const TargetAudience = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Target Audience</label>
        <div className="flex space-x-4">
          <label className="radio">
            <input
              type="radio"
              name="targetAudience"
              value="Bangla version"
              checked={formData.targetAudience === 'Bangla version'}
              onChange={handleChange}
            />
            Bangla version
          </label>
          <label className="radio">
            <input
              type="radio"
              name="targetAudience"
              value="English version"
              checked={formData.targetAudience === 'English version'}
              onChange={handleChange}
            />
            English version
          </label>
          <label className="radio">
            <input
              type="radio"
              name="targetAudience"
              value="English medium"
              checked={formData.targetAudience === 'English medium'}
              onChange={handleChange}
            />
            English medium
          </label>
          <label className="radio">
            <input
              type="radio"
              name="targetAudience"
              value="Bangla medium"
              checked={formData.targetAudience === 'Bangla medium'}
              onChange={handleChange}
            />
            Bangla medium
          </label>
          <label className="radio">
            <input
              type="radio"
              name="targetAudience"
              value="Madrasa"
              checked={formData.targetAudience === 'Madrasa'}
              onChange={handleChange}
            />
            Madrasa
          </label>
          <label className="radio">
            <input
              type="radio"
              name="targetAudience"
              value="Special child"
              checked={formData.targetAudience === 'Special child'}
              onChange={handleChange}
            />
            Special child
          </label>
          <label className="radio">
            <input
              type="radio"
              name="targetAudience"
              value="Others"
              checked={formData.targetAudience === 'Others'}
              onChange={handleChange}
            />
            Others
          </label>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;

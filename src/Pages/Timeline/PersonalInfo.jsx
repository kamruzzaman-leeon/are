import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Age Range</label>
        <div className="flex space-x-4">
          <label className="radio">
            <input
              type="radio"
              name="ageRange"
              value="below 18"
              checked={formData.ageRange === 'below 18'}
              onChange={handleChange}
            />
            Below 18
          </label>
          <label className="radio">
            <input
              type="radio"
              name="ageRange"
              value="19-25"
              checked={formData.ageRange === '19-25'}
              onChange={handleChange}
            />
            19-25
          </label>
          <label className="radio">
            <input
              type="radio"
              name="ageRange"
              value="26-30"
              checked={formData.ageRange === '26-30'}
              onChange={handleChange}
            />
            26-30
          </label>
          <label className="radio">
            <input
              type="radio"
              name="ageRange"
              value="31+"
              checked={formData.ageRange === '31+'}
              onChange={handleChange}
            />
            31+
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <div className="flex space-x-4">
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Disability</label>
        <div className="flex space-x-4">
          <label className="radio">
            <input
              type="radio"
              name="disability"
              value="yes"
              checked={formData.disability === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="radio">
            <input
              type="radio"
              name="disability"
              value="no"
              checked={formData.disability === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber || ''}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Enter your contact number"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;

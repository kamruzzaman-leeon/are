import React from 'react';

const Location = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Select Location</label>
        <select
          name="location"
          value={formData.location || ''}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="">Select Division</option>
          {/* Add dynamic location options here */}
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
        </select>
      </div>
    </div>
  );
};

export default Location;

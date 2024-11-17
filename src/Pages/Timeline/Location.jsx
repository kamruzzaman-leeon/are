import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import bdGeoData from '../../assets/organized_bd_geo.json'; // Adjust the path as needed

const Location = ({ control, errors }) => {
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedUpazila, setSelectedUpazila] = useState('');

  const handleDivisionChange = (e, onChange) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setSelectedDistrict(''); // Reset district and upazila when division changes
    setSelectedUpazila('');
    onChange({ division, district: '', upazila: '' });
  };

  const handleDistrictChange = (e, onChange) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setSelectedUpazila(''); // Reset upazila when district changes
    onChange({ division: selectedDivision, district, upazila: '' });
  };

  const handleUpazilaChange = (e, onChange) => {
    const upazila = e.target.value;
    setSelectedUpazila(upazila);
    onChange({ division: selectedDivision, district: selectedDistrict, upazila });
  };


  return (
    <div className="space-y-4">
      {/* Division Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Division <span className="text-red-500">*</span>
        </label>
        <Controller
          name="location.division"
          control={control}
          rules={{ required: 'Division is required' }}
          render={({ field: { onChange, value } }) => (
            <select
              value={value || ''}
              onChange={(e) => handleDivisionChange(e, onChange)}
              className="select select-bordered w-full"
            >
              <option value="">Select Division</option>
              {Object.keys(bdGeoData).map((index) => (
                <option key={index} value={division}>
                  {division}
                </option>
              ))}
            </select>
          )}
        />
        {errors?.location?.division && (
          <span className="text-red-500 text-sm">{errors.location.division.message}</span>
        )}
      </div>

      {/* District Dropdown */}
      {selectedDivision && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            District <span className="text-red-500">*</span>
          </label>
          <Controller
            name="location.district"
            control={control}
            rules={{ required: 'District is required' }}
            render={({ field: { onChange, value } }) => (
              <select
                value={value || ''}
                onChange={(e) => handleDistrictChange(e, onChange)}
                className="select select-bordered w-full"
              >
                <option value="">Select District</option>
                {Object.keys(bdGeoData[selectedDivision]).map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            )}
          />
          {errors?.location?.district && (
            <span className="text-red-500 text-sm">{errors.location.district.message}</span>
          )}
        </div>
      )}

      {/* Upazila/Thana Dropdown */}
      {selectedDistrict && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upazila/Thana <span className="text-red-500">*</span>
          </label>
          <Controller
            name="location.upazila"
            control={control}
            rules={{ required: 'Upazila/Thana is required' }}
            render={({ field: { onChange, value } }) => (
              <select
                value={value || ''}
                onChange={(e) => handleUpazilaChange(e, onChange)}
                className="select select-bordered w-full"
              >
                <option value="">Select Upazila/Thana</option>
                {bdGeoData[selectedDivision][selectedDistrict].map((upazilaObj) => (
                  <option key={upazilaObj.id} value={upazilaObj.name}>
                    {upazilaObj.name}
                  </option>
                ))}
              </select>
            )}
          />
          {errors?.location?.upazila && (
            <span className="text-red-500 text-sm">{errors.location.upazila.message}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Location;

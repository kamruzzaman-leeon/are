import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const PersonalInfo = ({ formData, setFormData }) => {
  const { register, watch } = useForm({
    defaultValues: formData,
  });

  // Watch form inputs to trigger updates on change
  const watchFields = watch(['ageRange', 'gender', 'disability', 'contactNumber']);

  // Auto-save the data on any change
  useEffect(() => {
    setFormData((prev) => ({ ...prev, ...watchFields }));
  }, [watchFields, setFormData]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Age Range<span className='text-red-600'>*</span></label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              {...register('ageRange',{required:true})}
              value="below 18"
              className="radio radio-primary"
            />
            <span>Below 18</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              {...register('ageRange',{required:true})}
              value="19-25"
              className="radio radio-primary"
            />
            <span>19-25</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              {...register('ageRange')}
              value="26-30"
              className="radio radio-primary"
            />
            <span>26-30</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              {...register('ageRange')}
              value="31+"
              className="radio radio-primary"
            />
            <span>31+</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Gender<span className='text-red-600'>*</span></label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              {...register('gender')}
              value="male"
              className="radio radio-primary"
            />
            <span>Male</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              {...register('gender')}
              value="female"
              className="radio radio-primary"
            />
            <span>Female</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              {...register('gender')}
              value="other"
              className="radio radio-primary"
            />
            <span>Other</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Disability<span className='text-red-600'>*</span></label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              {...register('disability')}
              value="yes"
              className="radio radio-primary"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              {...register('disability')}
              value="no"
              className="radio radio-primary"
              defaultChecked
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Contact Number</label>
        <input
          type="text"
          {...register('contactNumber')}
          className="input input-bordered w-full"
          placeholder="Enter your contact number"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;

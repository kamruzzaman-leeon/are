import React from 'react';
import { Controller } from 'react-hook-form';

const PersonalInfo = ({ control, errors }) => {
  return (
    <div>
      <div className='flex flex-row items-center'>
        <label className='label'>Age Range<span className='text-red-500'>*</span></label>
        <Controller
          name="ageRange"
          control={control}
          rules={{ required: "Age range is required" }}
          render={({ field }) => (
            <div className='flex flex-1 justify-evenly flex-col md:flex-row'>
              <label className='label cursor-pointer'>
                <input type="radio" {...field} value="below-18" />
                <span className='mx-2'>below 18</span>
              </label>
              <label className='label cursor-pointer'>
                <input type="radio" {...field} value="19-25" />
                <span className='mx-2'>19-25</span>
              </label>
              <label className='label cursor-pointer'>
                <input type="radio" {...field} value="26-30" />
                <span className='mx-2'>26-30</span>
              </label>
              <label className='label cursor-pointer'>
                <input type="radio" {...field} value="31+" />
                <span className='mx-2'>31+</span>
              </label>
            </div>
          )}
        />
        {errors.ageRange && <span className='text-red-500'>{errors.ageRange.message}</span>}
      </div>

      <div className='flex flex-row items-center'>
        <label className='label'>Gender<span className='text-red-500'>*</span></label>
        <Controller
          name="gender"
          control={control}
          rules={{ required: "Gender is required" }}
          render={({ field }) => (
            <div className='flex flex-1 justify-evenly flex-col md:flex-row'>
              <label className='label cursor-pointer'>
                <input type="radio" {...field} value="Male" />
                <span className='mx-2'>Male</span>
              </label>
              <label className='label cursor-pointer'>
                <input type="radio" {...field} value="Female" />
                <span className='mx-2'>Female</span>
              </label>
              <label className='label cursor-pointer'>
                <input type="radio" {...field} value="Other" />
                <span className='mx-2'>Other</span>
              </label>
            </div>
          )}
        />
        {errors.gender && <span className='text-red-500'>{errors.gender.message}</span>}
      </div>

      <div className='flex flex-row items-center'>
        <label className='label'>Disability</label>
        <Controller
          name="disability"
          control={control}
          render={({ field }) => (
            <input type="checkbox" {...field} />
          )}
        />
      </div>

      <div className="flex flex-row items-center">
        <label className="label">Mobile Number<span className='text-red-500'>*</span></label>
        <div className="join">
          <span className="join-item btn text-gray-700">+88</span>
          <Controller
            name="mobile"
            control={control}
            rules={{
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Mobile number must be 11 digits (without the +88)",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Enter your mobile number"
                className="input input-bordered join-item"
                maxLength={11} // Only allow 11 digits for the mobile number
              />
            )}
          />
        </div>
        {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
      </div>
    </div>
  );
};

export default PersonalInfo;

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const TargetAudience = ({ formData, setFormData }) => {
  const { register, watch, formState: { errors } } = useForm({
    defaultValues: formData,
  });

  // Watch the targetAudience field to trigger updates
  const watchFields = watch('targetAudience');
  const watchOthers = Array.isArray(watchFields) ? watchFields.includes('Others') : watchFields === 'Others';

  // Auto-save the data on any change
  useEffect(() => {
    setFormData((prev) => ({ ...prev, targetAudience: watchFields }));
  }, [watchFields, setFormData]);

  return (
    <div>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Target Audience</label>
        <div className="flex flex-col space-y-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register('targetAudience', { required: true })}
              value="Bangla version"
            />
            <span>Bangla version</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register('targetAudience', { required: true })}
              value="English version"
            />
            <span>English version</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register('targetAudience', { required: true })}
              value="English medium"
            />
            <span>English medium</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register('targetAudience', { required: true })}
              value="Bangla medium"
            />
            <span>Bangla medium</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register('targetAudience', { required: true })}
              value="Madrasa"
            />
            <span>Madrasa</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register('targetAudience', { required: true })}
              value="Special child"
            />
            <span>Special child</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register('targetAudience', { required: true })}
              value="Others"
            />
            <span>Others</span>
          </label>

          {/* Conditionally render the "Others" input field */}
          {watchOthers && (
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Specify Other Audience</label>
              <input
                type="text"
                {...register('otherTargetAudience', { required: watchOthers })}
                className="input input-bordered w-full mt-1"
                placeholder="Specify other audience"
              />
            </div>
          )}
        </div>
        {errors.targetAudience && (
          <p className="text-red-500 text-sm mt-1">Please select at least one target audience.</p>
        )}
        {errors.otherTargetAudience && watchOthers && (
          <p className="text-red-500 text-sm mt-1">Please specify the other audience.</p>
        )}
      </div>
    </div>
  );
};

export default TargetAudience;

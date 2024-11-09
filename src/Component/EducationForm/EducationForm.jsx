// EducationForm.js
import React from 'react';
import { useFieldArray, Controller } from 'react-hook-form';

const EducationForm = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education'
  });

  return (
    <div>
      <div className='flex items-center gap-2'><h3 className='text-center'>Education</h3><button className='btn' onClick={() => append({ school: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', grade: '' })}
        style={{ marginTop: '1rem' }}
      > Add Education</button></div>
      {fields.map((item, index) => (
        <div key={item.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd' }}>
          <Controller
            name={`education[${index}].school`}
            control={control}
            render={({ field }) => <input {...field} placeholder="School" />}
          />
          <Controller
            name={`education[${index}].degree`}
            control={control}
            render={({ field }) => <input {...field} placeholder="Degree" />}
          />
          <Controller
            name={`education[${index}].fieldOfStudy`}
            control={control}
            render={({ field }) => <input {...field} placeholder="Field of Study" />}
          />
          <Controller
            name={`education[${index}].startDate`}
            control={control}
            render={({ field }) => <input {...field} type="date" placeholder="Start Date" />}
          />
          <Controller
            name={`education[${index}].endDate`}
            control={control}
            render={({ field }) => <input {...field} type="date" placeholder="End Date (or Expected)" />}
          />
          <Controller
            name={`education[${index}].grade`}
            control={control}
            render={({ field }) => <input {...field} placeholder="Grade" />}
          />
          <button type="button" onClick={() => remove(index)} style={{ color: 'red' }}>Remove</button>
        </div>
      ))}
      
    </div>
  );
};

export default EducationForm;

import React, { useState } from 'react';

const Education = ({ formData, setFormData }) => {
  const [education, setEducation] = useState(formData.education || []);

  const handleAddEducation = () => {
    setEducation([...education, { school: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', grade: '' }]);
  };

  const handleChangeEducation = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
    setFormData((prev) => ({ ...prev, education: updatedEducation }));
  };

  return (
    <div className="space-y-4">
      {education.map((edu, index) => (
        <div key={index} className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">School</label>
            <input
              type="text"
              value={edu.school}
              onChange={(e) => handleChangeEducation(index, 'school', e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter your school"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Degree</label>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => handleChangeEducation(index, 'degree', e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter your degree"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Field of Study</label>
            <input
              type="text"
              value={edu.fieldOfStudy}
              onChange={(e) => handleChangeEducation(index, 'fieldOfStudy', e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter your field of study"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="month"
              value={edu.startDate}
              onChange={(e) => handleChangeEducation(index, 'startDate', e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="month"
              value={edu.endDate}
              onChange={(e) => handleChangeEducation(index, 'endDate', e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Grade</label>
            <input
              type="text"
              value={edu.grade}
              onChange={(e) => handleChangeEducation(index, 'grade', e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter your grade"
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddEducation}
        className="btn btn-outline mt-4"
      >
        Add Education
      </button>
    </div>
  );
};

export default Education;

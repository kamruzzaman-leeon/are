import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    role === 'teacher' ? navigate('/find_teacher') : navigate('/find_student'); 
  };

  return (
    <div
      className="flex justify-center items-center h-[80vh] bg-gray-50 bg-cover bg-center my-1 bg-[url('https://i.ibb.co/3y07t3B/education-day-assortment-with-copy-space.jpg')]"
    >
      <div className="card bg-base-100 bg-opacity-60 hover:bg-opacity-90 w-auto shadow-xl">
        <div className="card-body flex flex-col sm:flex-row justify-center items-center space-x-2">
          <form onSubmit={handleSearch}>
            <label className="block md:inline-block text-gray-700 text-sm font-bold">
              I am looking for
            </label>
            <select
              className="select select-bordered join-item mx-2"
              onChange={handleRoleChange}
              value={role}
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
            <button
              type="submit"
              className="btn btn-primary mx-2"
              disabled={!role}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;

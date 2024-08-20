import React, { useState } from 'react';

const Banner = () => {
  const [role, setRole] = useState('');
  
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

    return (
    <div className="flex justify-center items-center h-[70vh] bg-gray-50">
      <div className="card bg-base-100 w-auto shadow-xl">
        <div className="card-body flex flex-col sm:flex-row justify-center items-center space-x-2">
          <form>
            <label className="block md:inline-block text-gray-700 text-sm font-bold">I am looking for</label>
            <select
              className="select select-bordered join-item mx-2"
              onChange={handleRoleChange}
              value={role}
            >
              <option disabled value="">Select Role</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
          </form>
         
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React, { useState } from 'react';
// import banner1 from '';
// https://i.ibb.co/3y07t3B/education-day-assortment-with-copy-space.jpg
// https://i.ibb.co/1rTrFZr/person-holding-light-bulb-with-graduation-cap.jpg
const Banner = () => {
  const [role, setRole] = useState('');
  
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div 
      className="flex justify-center items-center h-[80vh] bg-gray-50 bg-cover bg-center my-1 bg-[url('https://i.ibb.co/3y07t3B/education-day-assortment-with-copy-space.jpg')]"
      
    >
      <div className="card bg-base-100 bg-opacity-60 hover:bg-opacity-90 w-auto shadow-xl">
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

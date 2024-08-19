import React, { useState } from 'react';

const Banner = () => {
  const [role, setRole] = useState('');
  const [mainLocation, setMainLocation] = useState('');
  const [subLocations, setSubLocations] = useState([]);
  const [subLocation, setSubLocation] = useState('');

  const locations = {
    Dhaka: ['Gulshan', 'Banani', 'Dhanmondi'],
    Khulna: ['Sonadanga', 'Khalishpur', 'Shibbari'],
    Comilla: ['Kandirpar', 'Kotbari', 'Nawabpur'],
    // Add more locations and sub-locations as needed
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleMainLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setMainLocation(selectedLocation);
    setSubLocations(locations[selectedLocation] || []);
    setSubLocation(''); // Reset sub-location when main location changes
  };

  const handleSubLocationChange = (event) => {
    setSubLocation(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="card bg-base-100 w-auto shadow-xl">
        <div className="card-body flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <form>
            <label className="block text-gray-700 text-sm font-bold">I am looking for</label>
            <select
              className="select select-bordered join-item"
              onChange={handleRoleChange}
              value={role}
            >
              <option disabled value="">Select Role</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
          </form>
          <p className="text-gray-700 text-sm font-bold">in</p>
          <form>
            <label className="block text-gray-700 text-sm font-bold">Main Location</label>
            <select
              className="select select-bordered join-item"
              onChange={handleMainLocationChange}
              value={mainLocation}
            >
              <option disabled value="">Select Location</option>
              {Object.keys(locations).map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </form>
          {mainLocation && (
            <form>
              <label className="block text-gray-700 text-sm font-bold">Sub Location</label>
              <select
                className="select select-bordered join-item"
                onChange={handleSubLocationChange}
                value={subLocation}
              >
                <option disabled value="">Select Sub Location</option>
                {subLocations.map((subLoc) => (
                  <option key={subLoc} value={subLoc}>
                    {subLoc}
                  </option>
                ))}
              </select>
            </form>
          )}
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

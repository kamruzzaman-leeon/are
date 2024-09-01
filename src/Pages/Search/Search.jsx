import React, { useEffect, useState } from 'react';

import Filters from '../../Component/Filters';

import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate()
    const { role: roleParam } = useParams(); // Destructure role from useParams
    const [role, setRole] = useState(roleParam); // Initialize state with 'teacher'

    useEffect(() => {
        if (roleParam) {
            setRole(roleParam.toLowerCase()); // Update role based on URL parameter
        }
    }, [roleParam]); // Dependency array to update when roleParam changes

    // console.log(role); // For debugging purposes
    const handleTabChange = (newRole) => {
        setRole(newRole);
        navigate(`/search/${newRole}`);
    };
    return (
        <div className='bg-slate-50'>
            <Helmet>
                <title>Search | aRe </title>
            </Helmet>
            <div className='my-5'>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Teacher" defaultChecked={role === 'teacher'} onChange={() => handleTabChange('teacher')} />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        Teacher
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Student"
                        defaultChecked={role === 'student'} onChange={() => handleTabChange('student')} />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                        <div className='grid grid-cols-5'>
                            <div className='col-span-1'>
                                <Filters></Filters>
                            </div>
                            <div className='col-span-4 bg-white shadow-sm mx-2 border'>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Search;

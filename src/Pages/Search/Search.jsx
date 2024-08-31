import React, { useEffect, useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Filters from '../../Component/Filters';
import ListContainer from '../../Component/ListContainer';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Search = () => {
    const { role: roleParam } = useParams(); // Destructure role from useParams
    const [role, setRole] = useState(roleParam); // Initialize state with 'teacher'

    useEffect(() => {
        if (roleParam) {
            setRole(roleParam.toLowerCase()); // Update role based on URL parameter
        }
    }, [roleParam]); // Dependency array to update when roleParam changes

    console.log(role); // For debugging purposes

    return (
        <div className='bg-slate-50'>
            <Helmet>
                <title>Search | aRe </title>
            </Helmet>
            <div className='my-5'>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Teacher" defaultChecked={role === 'teacher'} />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        Teacher
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Student"
                        defaultChecked={role === 'student'} />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        Student
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Search;

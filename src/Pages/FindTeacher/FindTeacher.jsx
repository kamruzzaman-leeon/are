import React from 'react';
import Filters from '../../Component/Filters';
import TeacherCard from './TeacherCard';
import { Helmet } from 'react-helmet-async';

const FindTeacher = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Find Teacher | Are</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
                <div className='col-span-1'>
                    <Filters></Filters>
                </div>
                <div className='col-span-4 p-2 border'>
                    <div className="shadow bg-white my-3 p-5 flex justify-between">
                        <h1 className='font-semibold content-center'> Total Teacher X</h1>
                        <div className='inline-flex items-center gap-2'><span>show</span> <form><select className="select select-bordered w-full max-w-xs">
                            
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select></form></div>
                    </div>
                    <TeacherCard></TeacherCard>
                    <TeacherCard></TeacherCard>
                    <TeacherCard></TeacherCard>
                    <TeacherCard></TeacherCard>
                    <TeacherCard></TeacherCard>
                    <TeacherCard></TeacherCard>
                    
                    <div className="shadow bg-white my-3 p-5 flex justify-between">Page</div>
                </div>
            </div>

        </div>
    );
};

export default FindTeacher;
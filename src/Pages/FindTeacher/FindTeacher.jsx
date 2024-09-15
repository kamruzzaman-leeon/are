import React from 'react';
import Filters from '../../Component/Filters';
import TeacherCard from './TeacherCard';

const FindTeacher = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                <div className='col-span-1'>
                    <Filters></Filters>
                </div>
                <div className='col-span-4 p-2 border sticky top-0'>
                <TeacherCard></TeacherCard>
                <TeacherCard></TeacherCard>
                <TeacherCard></TeacherCard>
                <TeacherCard></TeacherCard>
                <TeacherCard></TeacherCard>
                <TeacherCard></TeacherCard>
                <TeacherCard></TeacherCard>
                <TeacherCard></TeacherCard>
                <TeacherCard></TeacherCard>
                </div>
            </div>

        </div>
    );
};

export default FindTeacher;
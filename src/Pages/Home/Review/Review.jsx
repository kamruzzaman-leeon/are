import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    return (
        <div className='my-5 md:my-10 '>
            <div className=''>
                <h1 className="text-center text-5xl mt-20"></h1>
                <p className='text-center'></p>
            </div>
            <div className='flex flex-col justify-center content-center'>
                <h1 className='text-3xl font-bold xl md:text-5xl text-center mb-5'>Testimonial</h1>
                <p className='text-center'>Hear from Our Teaching Community</p></div>
            <div className='grid grid-flow-row md:grid-flow-col gap-5 shadow-sm py-5'>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>
        </div>
    );
};

export default Review;
import React from 'react';

const Section3 = () => {
    return (


        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='place-content-center'> 
                <div className='flex flex-col w-full p-5 mx-auto items-center lg:items-start gap-5  md:text-left'>
                    <h1 className='text-3xl lg:text-5xl font-extrabold ' >Your Journey Begins</h1>
                    <div className=''> <p className='text-base lg:text-xl'>we believe in the power of education to transform lives. Our platform is designed to bridge the gap between teachers and students, creating a space where learning knows no boundaries.</p></div>
                    <div className='' >
                        <button className='btn btn-sm md:btn-md btn-primary'>Get Started</button>
                    </div>
                </div>
            </div>
            <div><img src='https://i.ibb.co/syrBhRf/graduation-cap-with-globe-digital-art-style-education-day.jpg'></img></div>
        </div>

    );
};

export default Section3;
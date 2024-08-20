import React from 'react';

const JoinSection = () => {
    return (
        <div
            className="flex bg-fixed bg-gray-50 bg-cover bg-center my-1 bg-[url('https://i.ibb.co/1rTrFZr/person-holding-light-bulb-with-graduation-cap.jpg')] text-white">
            <div className='card'>
                <div className='card-body '>
                    <h1 className='card-title text-3xl font-extrabold'>Join Us in <br /> Revolutionizing <br /> Education!</h1>
                    <p className='w-full md:w-1/2 text-justify'>Are you passionate about teaching and eager to reach more students? Our platform offers you the tools and support you need to connect with learners from all over the world. By joining us, you'll have the opportunity to share your knowledge, inspire students, and be part of a vibrant community dedicated to making education accessible to everyone. We're committed to providing you with a seamless online experience, so you can focus on what you do best—teaching. Join us today and be a part of the future of education!</p>
                    <div> <button className='btn btn-primary'>Get Started</button></div>

                </div>

            </div>
        </div>
    );
};

export default JoinSection;
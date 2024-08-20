import React from 'react';
import PropTypes from 'prop-types';

const JoinSection = ({ title, desc, img }) => {
    return (
        <div
            className="flex bg-fixed bg-gray-50 bg-cover bg-center my-1 text-white" 
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className='card bg-black bg-opacity-30'>
                <div className='card-body w-full md:w-1/2'>
                    <h1 className='text-3xl font-extrabold'>{title}</h1>
                    <p>{desc}</p>
                    <div> 
                        <button className='btn btn-primary'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

JoinSection.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default JoinSection;

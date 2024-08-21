import React from 'react';
import PropTypes from 'prop-types';

const JoinSection = ({ title, desc, img }) => {
    return (
        <div
            className="flex lg:bg-fixed bg-gray-50 bg-cover bg-center h-screen my-1 text-white"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="card bg-black bg-opacity-30 flex py-10 overflow-y-auto">
                <div className="card-body w-full md:w-2/3 mx-auto text-center content-center justify-center py-4">
                    <h1 className="text-3xl font-extrabold mb-4">{title}</h1>
                    <div className="max-h-[60vh]  mb-8">
                        <p className="text-base ">{desc}</p>
                       <div className='mb-2'> <button className=" mt-4 btn btn-primary">Get Started</button></div>
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

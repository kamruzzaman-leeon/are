import React from 'react';
import Section2Card from './Section2Card';

const Section2 = () => {
    return (
        <div className='flex flex-col my-5 md:my-10 p-4 '>
            <div className='flex flex-col justify-center content-center'>
                <h1 className='text-3xl font-bold xl md:text-5xl text-center mb-5'>We have everything that you need</h1>
                <p className='text-center'>Discover the Tools and Resources You Need to Land Your desire needs</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5  my-10">
                <Section2Card></Section2Card>
                <Section2Card></Section2Card>
                <Section2Card></Section2Card>
                <Section2Card></Section2Card>

            </div>

        </div>
    );
};

export default Section2;
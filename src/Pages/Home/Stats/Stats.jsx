import React from 'react';
import StatsCard from './StatsCard';

const Stats = () => {
    return (
        <div className='flex flex-col my-5 md:my-10 '>
            <div className='flex flex-col justify-center content-center'>
                <h1 className='text-2xl md:text-5xl text-center mb-5'>aRe Site Stats</h1>
                <p className='text-center text-base'>Here we list our site stats and how many people we’ve helped find Teachers and students . It `&apos;`s a pretty awesome stats area!</p>
            </div>
            <div className="grid grid-cols-3 divide-x-2 my-20 shadow-inner ">
                <div className=''>
                    <StatsCard count={1111} title={'Posted'}></StatsCard>
                </div>
                <div><StatsCard count={250} title={'Teachers'}></StatsCard></div>
                <div><StatsCard count={600} title={'Students'}></StatsCard></div>
            </div>

        </div>
    );
};

export default Stats;
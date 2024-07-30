import React from 'react';

const ListContainer = () => {
    return (
       <div>
        <section className='flex justify-between items-center px-5 shadow bg-white'>
            <div>
                <h1 className='font-semibold'> Teachers List</h1>
            </div>
            <div className='flex flex-row items-center'>
                <h1 className='mr-2'>Show:</h1>
                <select className="select max-w-xs">
                    <option>10</option>
                    <option>20</option>
                    <option>40</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </div>
       </section>
       <section className='bg-white w-full shadow my-4 min-h-screen'>
            <div>
                dddv
            </div>
       </section>
       </div>
    );
};

export default ListContainer;
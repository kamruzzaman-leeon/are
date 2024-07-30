import React from 'react';
import Navbar from '../../Component/Navbar';
import Filters from '../../Component/Filters';
import ListContainer from '../../Component/ListContainer';

const Search = () => {
    return (
        <div className='bg-slate-50'>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 my-5 p-2 md:p-5'>
                <div className='md:col-span-1'>
                    <Filters></Filters>
                </div>
                <div className='md:col-span-2 lg:col-span-5  '>
                   <ListContainer></ListContainer>
                </div>
            </div>
        </div>
    );
};

export default Search;
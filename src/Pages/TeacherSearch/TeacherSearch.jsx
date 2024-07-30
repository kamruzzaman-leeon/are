import React from 'react';
import Navbar from '../../Component/Navbar';

const TeacherSearch = () => {
    return (
        <div className='bg-slate-50'>
            <Navbar></Navbar>
            <div className='grid grid-cols-6 gap-4 my-5 p-5'>
                <div className='col-span-1'>
                    <div className="shadow bg-white text-center p-3"><h1 className='font-semibold'> Filters</h1></div>
                    {/* Gender */}

                    <div className="shadow bg-white  p-5 my-2">
                    
                        <h1 className='font-semibold divider divider-center'>Gender</h1>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">All (optional)</span>
                                <input type="radio" name="Gender" className="radio" defaultChecked />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Male</span>
                                <input type="radio" name="Gender" className="radio " />
                            </label>
                        </div>
                        
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Female</span>
                                <input type="radio" name="Gender" className="radio " />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Others</span>
                                <input type="radio" name="Gender" className="radio " />
                            </label>
                        </div>
                       
                        
                    </div>
                    <div className="shadow bg-white  p-5 my-2">
                    
                        <h1 className='font-semibold divider divider-center'>Age</h1>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">All (optional)</span>
                                <input type="radio" name="Age" className="radio " defaultChecked />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">below 20</span>
                                <input type="radio" name="Age" className="radio " />
                            </label>
                        </div>
                        
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">20 - 25</span>
                                <input type="radio" name="Age" className="radio " />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">26 - 30</span>
                                <input type="radio" name="Age" className="radio " />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Above 30</span>
                                <input type="radio" name="Age" className="radio "  />
                            </label>
                        </div>
                        
                    </div>




                </div>
                <div className='col-span-5  '>
                    <div className='flex justify-between items-center px-5 shadow bg-white'>

                    <div>
                        <h1 className='font-semibold'> Teachers</h1>
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
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeacherSearch;
import React from 'react';

const Filters = () => {
    return (
        <div>

            <div className="shadow bg-white text-center p-3">
                <h1 className='font-semibold'> Filters</h1>
            </div>
            {/* Search For*/}
            <div className="shadow bg-white  p-5 my-2">

                <h1 className='font-semibold divider divider-center'>Search For</h1>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">All (optional)</span>
                        <input type="radio" name="SearchFor" className="radio" defaultChecked />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Teacher</span>
                        <input type="radio" name="SearchFor" className="radio " />
                    </label>
                </div>

                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Student</span>
                        <input type="radio" name="SearchFor" className="radio " />
                    </label>
                </div>
                
            </div>

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
            {/* Age */}
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
                        <input type="radio" name="Age" className="radio " />
                    </label>
                </div>

            </div>


        </div>


    );
};

export default Filters;
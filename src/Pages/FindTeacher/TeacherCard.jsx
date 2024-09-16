import React from 'react';
import { IoBookmarkOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import ToolTip from '../../Component/ToolTip/ToolTip';
const TeacherCard = () => {
    return (
        <div className="relative  shadow-sm m-5 hover:bg-transparent transition-all duration-75 ease-in-out before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-blue-600 hover:before:w-full before:transition-all before:duration-700 before:ease-in-out">
            <div className="flex flex-col md:flex-row p-2">
                <div className='p-2 '>
                    <h2 className="font-bold">Mr. Teacher</h2>
                    <p><span className='text-base-content'>Background:</span></p>
                    <ToolTip data='Gender'>
                        <p className="inline-block">

                            <span className="inline-flex items-center">
                                <BsGenderMale className="mr-1" />
                                <BsGenderFemale className="mr-1" />

                            </span>

                        </p>
                    </ToolTip>

                    <p>Expertise</p>
                    <ToolTip data='Remuneration'><p className='inline-flex'><MdAttachMoney /></p></ToolTip>

                </div>
                <div className="gap-2 ml-auto space-x-2 text-center flex flex-row-reverse md:flex-col-reverse md:justify-between">
                    <div className='flex gap-2'>

                        <ToolTip data="Bookmark"><button><IoBookmarkOutline className='text-2xl' /></button></ToolTip>
                        <ToolTip data='View Details'><button><IoMdMore className='text-2xl' /></button></ToolTip>
                        <ToolTip data="chat with Mr. Teacher"><button><IoChatboxEllipsesOutline className='text-2xl' /></button> </ToolTip>
                    </div>

                    {/* Rating */}
                    <div>
                        <ToolTip data='Rating'>
                            <div className="rating rating-sm inline-flex items-center">
                                <input disabled type="radio" name="rating-6" className="mask mask-star-2 bg-blue-600" />
                                <input disabled type="radio" name="rating-6" className="mask mask-star-2 bg-blue-600"  />
                                <input disabled type="radio" name="rating-6" className="mask mask-star-2 bg-blue-600" />
                                <input disabled type="radio" name="rating-6" className="mask mask-star-2 bg-blue-600" />
                                <input disabled type="radio" name="rating-6" className="mask mask-star-2 bg-blue-600" />
                                <p>(0)</p>
                            </div>
                            
                            </ToolTip>
                    </div>


                </div>

            </div>
        </div>

    );
};

export default TeacherCard;

import { NavLink } from "react-router-dom";
import './Navbar.css'
import { IoMdHome } from "react-icons/io";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";
import { IoIosLogIn } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";

const Navbar = () => {
    const { user, loading } = useAuth();
    
    // console.log("user:", user)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // // Check if the page is still loading
    // if (loading) {
    //     return <Loading />;  // Show Loading component while data is being fetched
    // }

    const navoptions = <>
        <li className="navitem ">

            <NavLink
                to="/"
                className={`inline-flex gap-x-1 content-center  ({ isActive }) => isActive ? "active" : ""`}
            >
                <IoMdHome className="text-xl" />
                <span>Home</span>
            </NavLink>
        </li>
        {/* <li className="navitem">
            <NavLink 
                to="/search/teacher" 
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Search
            </NavLink>
        </li> */}
        <li className="navitem">

            <NavLink
                to="/find_teacher"
                className={`inline-flex gap-x-1 content-center  ({ isActive }) => isActive ? "active" : ""`}
            ><LiaChalkboardTeacherSolid className="text-2xl" />
                <span>Find Teacher</span>
            </NavLink>
        </li>
        <li className="navitem">

            <NavLink
                to="/find_student"
                className={`inline-flex gap-x-1  content-center  ({ isActive }) => isActive ? "active" : ""`}
            > <PiStudentFill className="text-2xl" />
                <span>Find Student</span>
            </NavLink>
            
        </li>
    </>;
    
    return (

        <div
            className={`navbar sticky top-0 z-[999] bg-white transition-shadow duration-300 ease-in-out ${isScrolled ? 'shadow-md' : ''
                }`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-auto p-4 shadow">
                        {navoptions}
                    </ul>
                </div>

                <NavLink className="navitem hidden lg:flex text-2xl " to="/">aRe</NavLink>
            </div>
            <div className="navbar-center  ">
                <NavLink className="navitem text-2xl lg:hidden flex" to="/">aRe</NavLink>
                <ul className=" hidden lg:flex space-x-4">
                    {navoptions}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                {
                    user ?

                        (<div className="dropdown dropdown-end">

                            <div tabIndex={0} role="button" className="btn btn-ghost  btn-circle avatar">
                                <div className="w-auto rounded-full">
                                    <img src={user?.photoURL}
                                        
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className=" dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-auto p-4 shadow">
                                <li><span className="text-md mr-2" >{user?.displayName}</span></li>
                                <hr className=" my-1" />
                                <li className="navitem"><NavLink to="/profile" className={`inline-flex items-center`}><CgProfile className="text-2xl mr-2" /><span>Profile</span></NavLink></li>
                                <li className="navitem"><NavLink to="/settings" className={`inline-flex items-center`}><IoSettings className="text-2xl mr-2" /><span>Settings</span></NavLink></li>
                                <li className="navitem"><NavLink to="/logout" className={`inline-flex items-center`}> <FaSignOutAlt className="text-2xl mr-2" /><span>LogOut</span></NavLink> </li>
                            </ul>
                        </div>) :
                        (<div>
                            <ul className="">
                                <li className="navitem">
                                    <NavLink
                                        to="/login"
                                        className={`inline-flex items-center ({ isActive }) => isActive ? "active" : ""`}>
                                        <IoIosLogIn className="text-2xl mr-2" />
                                        <span> Login</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>)
                }


            </div>
        </div>
    );
};

export default Navbar;

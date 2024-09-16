import { NavLink } from "react-router-dom";
import './Navbar.css'
import { IoMdHome } from "react-icons/io";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";
import { IoIosLogIn } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
const Navbar = () => {
    const navoptions = <>
        <li className="navitem ">

            <NavLink
                to="/"
                className={`inline-flex items-center ({ isActive }) => isActive ? "active" : ""`}
            >
                <IoMdHome className="text-2xl"/>
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
                className={`inline-flex items-center ({ isActive }) => isActive ? "active" : ""`}
            ><LiaChalkboardTeacherSolid className="text-2xl"/>
                <span>Find Teacher</span>
            </NavLink>
        </li>
        <li className="navitem">

            <NavLink
                to="/find_student"
                className={`inline-flex items-center ({ isActive }) => isActive ? "active" : ""`}
            > <PiStudentFill className="text-2xl"/>
                <span>Find Student</span>
            </NavLink>
        </li>
    </>;

    return (
        <div className="navbar  shadow-sm sticky top-0 z-50 bg-white border-b-2 border-t-2 bg-opacity-80">
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

                <NavLink className="navitem hidden lg:flex text-3xl" to="/">aRe</NavLink>
            </div>
            <div className="navbar-center  ">
                <NavLink className="navitem text-3xl lg:hidden flex" to="/">aRe</NavLink>
                <ul className=" hidden lg:flex space-x-4">
                    {navoptions}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <div>
                    <ul className="">

                        <li className="navitem">

                            <NavLink
                                to="/sign-in"
                                className={`inline-flex items-center ({ isActive }) => isActive ? "active" : ""`}
                            >
                                <IoIosLogIn className="text-2xl" />
                                <span> Login</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-blue-500 btn-circle avatar">
                        <div className="w-auto rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-auto p-4 shadow">
                        <li className="navitem"><NavLink to="/profile" className={`inline-flex items-center`}><CgProfile className="text-2xl"/><span>Profile</span></NavLink></li>
                        <li className="navitem"><NavLink to="/settings" className={`inline-flex items-center`}><IoSettings className="text-2xl"/><span>Settings</span></NavLink></li>
                        <li className="navitem"><NavLink to="/sign-out" className={`inline-flex items-center`}> <FaSignOutAlt className="text-2xl"/><span>LogOut</span></NavLink> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

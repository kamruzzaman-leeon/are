import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const navoptions = <>
        <li className="navitem">
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Home
            </NavLink>
        </li>
        <li className="navitem">
            <NavLink 
                to="/search/teacher" 
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Search
            </NavLink>
        </li>
    </>;

    return (
        <div className="navbar sticky top-0 z-50 bg-white border-b-2 border-t-2 bg-opacity-80">
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
                
                <Link className="navitem hidden lg:flex text-3xl">aRe</Link>
            </div>
            <div className="navbar-center  ">
                <a className="hover:bg-blue-500 text-3xl lg:hidden flex">aRe</a>
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
                className={({ isActive }) => isActive ? "active" : ""}
            >
               Sign In
            </NavLink>
        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-blue-500 btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-auto p-4 shadow">
                        <li className="navitem"><NavLink to="/profile">Profile</NavLink></li>
                        <li className="navitem"><NavLink to="/settings">Settings</NavLink></li>
                        <li className="navitem"><NavLink to="/sign-out">Log Out</NavLink> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
    const navoptions = <>
        <li className=""><Link to="/">Home</Link></li>
        <li className=""><Link to="/search">Search</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/sign-in">Sign In</Link> </li>
        <li><Link to="/sign-out">Sign Out</Link> </li>

    </>
    return (
        <div className="navbar border-b-2 sticky top-0 bg-opacity-60 bg-white font-semibold text-neutral-700">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navoptions
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-4xl">aRe</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    {
                        navoptions
                    }
                </ul>
            </div>
            {/* <div className="navbar-end">
            
            </div> */}
        </div>
    );
};

export default Navbar;
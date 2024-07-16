import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            {/* nav start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 md:hidden lg:hidden">
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
                    {/* for mobile device */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/UpdateProfile">Update Profile</NavLink></li>
                        <li><NavLink to="/UserProfile">User Profile</NavLink></li>
                    </ul>
                </div>
                <a className="lg:text-3xl md:text-2xl font-bold">Civic Spaces</a>
            </div>

            {/* nav center */}
            <div className="navbar-center hidden lg:flex md:flex">
                {/* for large device */}
                <ul className="menu menu-horizontal px-1 md:space-x-2">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/UpdateProfile">Update Profile</NavLink></li>
                    <li><NavLink to="/UserProfile">User Profile</NavLink></li>
                </ul>
            </div>

            {/* nav end */}
            <div className="navbar-end md:space-x-2">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn">Register</Link>
            </div>
        </div>
    );
};

export default NavBar;
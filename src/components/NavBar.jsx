import 'animate.css';
import React, { useContext } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../providers/AuthProvider';

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(user);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                navigate("/");
                toast.success("Logged Out Successfully!", {
                    position: 'top-center',
                });
            })
            .catch(error => {
                console.error(error);
            })
    }

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
                        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <a className="lg:text-3xl md:text-2xl font-bold italic animate__animated animate__backInLeft">Civic Spaces</a>
                    <small className='font-semibold text-amber-500 animate__animated animate__backInLeft'>- Transforming Together</small>
                </div>
            </div>

            {/* nav center */}
            <div className="navbar-center hidden lg:flex md:flex">
                {/* for large device */}
                <ul className="menu menu-horizontal px-1 md:space-x-2">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                </ul>
            </div>

            {/* nav end */}
            <div className="navbar-end md:space-x-2">
                {
                    user ?
                        <div className='flex justify-center items-center gap-4'>
                            <div className="tooltip tooltip-bottom tooltip-info" data-tip={user.displayName ? user.displayName : "Username is not available"}>
                                {
                                    user.photoURL ?
                                        <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                                        :
                                        <FaRegUserCircle className='text-4xl' />
                                }
                            </div>
                            <Link onClick={handleSignOut} className="btn">Log Out</Link>
                        </div>
                        :
                        <div className='flex space-x-2'>
                            <Link to="/login" className="btn">Login</Link>
                            <Link to="/register" className="btn">Register</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default NavBar;
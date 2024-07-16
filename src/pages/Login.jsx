import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        // extracting form data
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const pass = form.get("password");

        // signing in a user
        signInUser(email, pass)
            .then(result => {
                const user = result.user;
                toast.success("Logged in Successfully!", {
                    position: 'top-center',
                });
                console.log(user);
            })
            .catch(error => {
                toast.error(error, {
                    position: 'top-center',
                });
                console.error(error);
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                toast.success("Logged in Successfully!", {
                    position: 'top-center',
                });
                console.log(user);
            })
            .catch(error => {
                toast.error(error, {
                    position: 'top-center',
                });
                console.error(error);
            })
    }

    const handleGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                toast.success("Logged in Successfully!", {
                    position: 'top-center',
                });
                console.log(user);
            })
            .catch(error => {
                toast.error(error, {
                    position: 'top-center',
                });
                console.error(error);
            })
    }

    return (
        <div>
            <Helmet><title>Login | Civic Spaces</title></Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        {/* login form */}
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p>Didn't have any account?
                                <Link to="/register" className='text-blue-600 ml-2'>Register!</Link>
                            </p>
                            <div className='flex justify-center items-center gap-4 mt-4 text-3xl'>
                                <FaGoogle onClick={handleGoogleLogin} className='cursor-pointer' />
                                <FaGithub onClick={handleGithubLogin} className='cursor-pointer' />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
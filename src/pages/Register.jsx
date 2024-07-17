import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        // extracting form data
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photoURL");
        const pass = form.get("password");

        // password validation
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(pass)) {
            // have to return
            return toast.warn("Password must have an Uppercase letter, a Lowercase letter and minimum 6 characters long!", {
                position: 'top-center',
            });
        }

        // form resetting
        e.target.reset();

        // creating a user
        createUser(email, pass)
            .then(result => {
                const user = result.user;
                toast.success("You have successfully created your account!", {
                    position: 'top-center',
                });
                console.log(user);
            })
            .catch(error => {
                toast.error(error.code, {
                    position: 'top-center',
                });
                console.error(error);
            })
    }

    return (
        <div>
            <Helmet><title>Register | Civic Spaces</title></Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        {/* register form */}
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Username" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            </div>
                            <p>Already have an account?
                                <Link to="/login" className='text-blue-600 ml-2'>Login!</Link>
                            </p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
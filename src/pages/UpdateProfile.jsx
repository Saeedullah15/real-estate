import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase/firebase.config';

const UpdateProfile = () => {
    const [showPass, setShowPass] = useState(false);

    const user = auth.currentUser;
    const name = user.displayName;
    const email = user.email;
    const photo = user.photoURL;
    console.log(user, name, email, photo);

    // profile updating handler
    const handleUpdateProfile = (e) => {
        e.preventDefault();

        const nameFieldValue = e.target.name.value;
        const photoFieldValue = e.target.photoURL.value;
        console.log(nameFieldValue, photoFieldValue);

        updateProfile(auth.currentUser, { displayName: nameFieldValue, photoURL: photoFieldValue })
            .then(() => {
                toast.success("Profile updated successfully!", {
                    position: 'top-center',
                });
            })
            .catch(error => {
                toast.error(error.code, {
                    position: 'top-center',
                });
            })
    }

    return (
        <div>
            <Helmet><title>Profile Update | Civic Spaces</title></Helmet>
            <div className="bg-base-200 pt-20 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="bg-base-100 w-full max-w-sm shadow-2xl">
                        {/* update form */}
                        <form onSubmit={handleUpdateProfile} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={name} placeholder="Username" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' defaultValue={email} placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photoURL' defaultValue={photo} placeholder="PhotoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
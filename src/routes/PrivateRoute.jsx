import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user);

    // holding the loading state into a loader
    if (loading) {
        return (
            <div className='my-10 flex justify-center'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (user) {
        return (
            <div>
                {children}
            </div>
        );
    }
    else {
        return <Navigate to="/login"></Navigate>
    }


};

export default PrivateRoute;
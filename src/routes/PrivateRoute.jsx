import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    // console.log(user);

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
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Helmet><title>404 | Not Found</title></Helmet>
            <div className='flex flex-col items-center space-y-10'>
                <h2 className='text-3xl font-bold mt-20'>404 | Not Found</h2>
                <Link to="/">
                    <button className='btn'>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;
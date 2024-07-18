import moment from 'moment';
import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user.displayName);

    return (
        <div className='my-10'>
            <Helmet><title>Dashboard | Civic Spaces</title></Helmet>
            <Marquee>
                <h3 className='text-xl text-black font-semibold'>Hello {user.displayName}! Welcome to your dashboard!</h3>
            </Marquee>
            <h3 className='text-center font-bold mt-4 text-amber-500'>{moment().format('MMMM Do YYYY, h:mm a')}</h3>
            <p className='w-2/3 mx-auto mt-3 text-center'>This dashboard provides a comprehensive overview of your activities, preferences, and important updates. Here, you can manage your properties, track your engagements, and stay informed about the latest news and events.</p>
            <div className='h-80'>

            </div>
        </div>
    );
};

export default Dashboard;
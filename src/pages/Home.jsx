import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import Estates from '../components/Estates';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home | Civic Spaces</title></Helmet>
            <Banner></Banner>
            <Estates></Estates>
        </div>
    );
};

export default Home;
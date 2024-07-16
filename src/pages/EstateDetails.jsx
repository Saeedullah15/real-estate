import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const EstateDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <Helmet><title>Estate Details | {id}</title></Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released! {id}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;
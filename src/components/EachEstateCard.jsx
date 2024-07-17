import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const EachEstateCard = ({ eachEstate }) => {
    const { id, image, estate_title, segment_name, description, price, status, area, location, facilities } = eachEstate;

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl" data-aos="zoom-in">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body h-auto">
                    <h2 className="card-title">{estate_title}</h2>
                    <h2 className="card-title">{segment_name}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{status}</p>
                    <p>{area}</p>
                    <p>{location}</p>
                    {
                        facilities.map((facility, idx) => <li key={idx}>{facility}</li>)
                    }
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                            <Link to={`/estateDetails/${id}`}>View Property</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachEstateCard;
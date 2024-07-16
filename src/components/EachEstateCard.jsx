import React from 'react';

const EachEstateCard = ({ eachEstate }) => {
    const { id, image, estate_title, segment_name, description, price, status, area, location, facilities } = eachEstate;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
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
                        <button className="btn btn-primary">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachEstateCard;
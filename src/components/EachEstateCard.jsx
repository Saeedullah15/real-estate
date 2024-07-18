import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { BiSolidArea } from "react-icons/bi";
import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { Link } from 'react-router-dom';

const EachEstateCard = ({ eachEstate }) => {
    const { id, image, estate_title, segment_name, description, price, status, area, location, facilities } = eachEstate;
    console.log(image, id);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl" data-aos="zoom-in">
                <figure>
                    <img className="h-52 w-full" src={image} alt="" />
                </figure>
                <div className="card-body h-[340px]">
                    <h2 className="card-title">{estate_title}</h2>
                    <h2 className="text-black text-sm font-bold">{segment_name}</h2>
                    <p className="text-sm text-gray-400">{description}</p>
                    <hr />
                    <div className="flex">
                        <p className="flex items-center"><FaDollarSign /> {price}</p>
                        <p className="flex items-center gap-1"><IoMdPricetags /> {status}</p>
                        <p className="flex items-center gap-1"><BiSolidArea /> {area}</p>
                    </div>
                    <p className="flex items-center gap-1"><FaLocationDot /> {location}</p>
                    <hr />
                    <div className="flex justify-between mb-3">
                        {
                            facilities.map((facility, idx) => <li
                                key={idx}
                                className="list-none text-amber-500 text-xs"
                            >#{facility}</li>)
                        }
                    </div>
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
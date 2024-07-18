import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';

const EstateDetails = () => {
    const { id } = useParams();
    const allData = useLoaderData();
    // console.log(allData, id);

    const singleData = allData.find(eachData => eachData.id === parseInt(id));
    // console.log(singleData);

    const { image, name, category, location, description, amenities, hours_of_operation, contact_information } = singleData;

    return (
        <div className='mt-5 mb-20'>
            <Helmet><title>Estate Details | {id}</title></Helmet>
            <div className="">
                <figure>
                    <img className='w-full md:h-[500px]' src={image} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-justify'>{description}</p>
                    <p>Category: {category}</p>
                    <div>
                        <p>Address: {location.address}, Lat: {location.latitude}, Long: {location.longitude}</p>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <div>
                            <h5>Amenities:</h5>
                            {
                                amenities.map((each, idx) => <ul
                                    key={idx}
                                    className='list-disc ml-8'
                                >
                                    <li>{each}</li>
                                </ul>)
                            }
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div>
                            <h4>Opening & Closing Days:</h4>
                            <ul className='ml-4'>
                                <li>Monday: {hours_of_operation.monday}</li>
                                <li>Tuesday: {hours_of_operation.tuesday}</li>
                                <li>Wednesday: {hours_of_operation.wednesday}</li>
                                <li>Thursday: {hours_of_operation.thursday}</li>
                                <li>Friday: {hours_of_operation.friday}</li>
                                <li>Saturday: {hours_of_operation.saturday}</li>
                                <li>Sunday: {hours_of_operation.sunday}</li>
                            </ul>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div>
                            <h4>Contact Information:</h4>
                            <div className='ml-4'>
                                <p>Phone: {contact_information.phone}</p>
                                <p>Email: {contact_information.email}</p>
                                <p>Website: {contact_information.website}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;
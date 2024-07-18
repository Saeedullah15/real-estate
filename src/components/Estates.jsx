import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachEstateCard from './EachEstateCard';

const Estates = () => {
    const allEstatesData = useLoaderData();
    // console.log(allEstatesData);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-10 md:my-20'>
            {
                allEstatesData.map(eachEstate => <EachEstateCard
                    key={eachEstate.id}
                    eachEstate={eachEstate}
                >
                </EachEstateCard>)
            }
        </div>
    );
};

export default Estates;
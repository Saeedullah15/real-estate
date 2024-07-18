import React, { useEffect, useState } from 'react';
import EachEstateCard from './EachEstateCard';

const Estates = () => {
    const [allEstatesData, setAllEstatesData] = useState([]);

    useEffect(() => {
        fetch("/estates.json")
            .then(res => res.json())
            .then(data => setAllEstatesData(data))
    }, [])

    console.log(allEstatesData);

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
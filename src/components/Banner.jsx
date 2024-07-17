import React from 'react';
import banner2 from '../assets/20945153.jpg';
import banner4 from '../assets/30401.jpg';
import banner1 from '../assets/family-celebrates-winter-indoors-decorating-homemade-gingerbread-house-generated-by-artificial-intelligence.jpg';
import banner3 from '../assets/realtor-counting-working.jpg';

const Banner = () => {
    return (
        <div>
            <swiper-container scrollbar-clickable="true" autoplay="true" navigation="true">
                <swiper-slide><img src={banner1} alt="" /></swiper-slide>
                <swiper-slide><img src={banner2} alt="" /></swiper-slide>
                <swiper-slide><img src={banner3} alt="" /></swiper-slide>
                <swiper-slide><img src={banner4} alt="" /></swiper-slide>
            </swiper-container>
        </div>
    );
};

export default Banner;
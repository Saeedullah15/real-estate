import React from 'react';
import banner1 from '../assets/1.jpg';
import banner2 from '../assets/2.jpg';
import banner3 from '../assets/3.jpg';
import banner4 from '../assets/4.jpg';
import banner5 from '../assets/5.jpg';
import banner6 from '../assets/6.jpg';
import banner7 from '../assets/7.jpg';
import banner8 from '../assets/8.jpg';

const Banner = () => {
    return (
        <div className='mt-2'>
            <swiper-container scrollbar-clickable="true" autoplay="true" navigation="true">
                <swiper-slide><img className='h-full w-full' src={banner1} alt="" /></swiper-slide>
                <swiper-slide><img className='h-full w-full' src={banner2} alt="" /></swiper-slide>
                <swiper-slide><img className='h-full w-full' src={banner3} alt="" /></swiper-slide>
                <swiper-slide><img className='h-full w-full' src={banner4} alt="" /></swiper-slide>
                <swiper-slide><img className='h-full w-full' src={banner5} alt="" /></swiper-slide>
                <swiper-slide><img className='h-full w-full' src={banner6} alt="" /></swiper-slide>
                <swiper-slide><img className='h-full w-full' src={banner7} alt="" /></swiper-slide>
                <swiper-slide><img className='h-full w-full' src={banner8} alt="" /></swiper-slide>
            </swiper-container>
        </div>
    );
};

export default Banner;
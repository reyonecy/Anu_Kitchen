'use client'
import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const data = [
    {
        img: '/images/food1.jpeg'
    },
    {
        img: '/images/food2.jpeg'
    },
    {
        img: '/images/food3.jpeg'
    },
    {
        img: '/images/food4.jpeg'
    },
    {
        img: '/images/food5.jpeg'
    },
]

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
    return(
        <div className='bg-[#1E1E1E]'>
            <div className='mt-20'>
            <Slider {...settings}>
                {data.map((d) => (
                    <div className='h-[450px]'>
                        <div className='flex justify-center items-center'>
                            <img src={d.img} alt='' className='h-80 w-50'/>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    );
};

export default Carousel;
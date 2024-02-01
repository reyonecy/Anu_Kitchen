import React from 'react'
// import { lusitana } from 'app/components/fonts/font.js'

const AboutUs = () =>{
    return(
        <div className='bg-[#1E1E1E] h-screen flex flex-col items-center'>
                <h1 className='font-montserrat text-3xl font-bold tracking-wide text-center mt-28'>
                    ABOUT US
                </h1>
                
                <div className='px-20 text-2xl ml-10 mt-16'>
                <p className='text-center mx-10'>
                Welcome to Anu Kitchen and Catering Services, located in Campsie Street, Australia. We specialize in crafting delicious and healthy home made food, using fresh, locally sourced ingredients.
                    Our menu features a variety of vibrant salads, wholesome main courses, and mouthwatering yummy food items, all prepared by our dedicated chef.
                    Whether you’re dining in or opting for our catering services, expect a delightful culinary experience that reflects our commitment to excellence.
                    At Anu Kitchen, we believe in the power of good food to bring people together. Our mission is to create a welcoming space where every meal is an opportunity to connect, celebrate, and enjoy the simple joys of life.
                </p>
                   
                </div>
            </div>
        

    );
}

export default AboutUs;
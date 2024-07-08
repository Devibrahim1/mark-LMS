import React from 'react';
import Laptop from '../assets/laptop.jpg';
import { GoDotFill } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=''>
    <div className=' md:py-16 md:h-[800px] lg:h-[900px] h-[850px] '>
    <div className="bg-[url('https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-hero-section-bg.svg')] w-full md:h-[800px] lg:h-[850px] h-[750px] bg-cover md:bg-center bg-right absolute top-0">

      <div className='max-w-[1240px] mx-auto py-8 md:py-16 grid md:grid-cols-2 lg:mt-44 mt-20 overflow-x-hidden'>
        
        {/* <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' /> */}

        <div className='flex flex-col justify-center gap-5 mx-6'>
        <div className='flex align-middle '>
       <p className='pr-3 text-yellow-500 text-2xl'>< GoDotFill /> </p>
          <p className='text-white font-semibold'> ON-DEMAND COURSE</p>
          </div>
          
          <h1 className='text-white text-4xl md:text-6xl font-bold'>Complete Python Masterclass for Web Development</h1>
          <p className='text-white text-xl font-semibold'>
          Amet facilisi phasellus lacus, sit massa, erat placerat aenean aliquet ultrices eleifend enim enim lacus elit.
          </p>
          <div className='grid md:grid-cols-3 py-4'>
       
       
        <button type="button" class=" px-3 focus:outline-none text-black hover:bg-yellow-400 bg-white  hover:text-white focus:ring-4 focus:ring-yellow-300 text-md font-bold rounded-full py-2 ">Start Learning</button> 
       
       
     

        <h5 className=' md:py-2 py-5 pl-5 text-center text-md text-white font-bold hover:text-yellow-500'>View All Courses <span className=' text-white-500 font-bold text-2xl inline-flex align-middle'><FaLongArrowAltRight /> </span></h5>
        


        </div>
        </div>

        <img className=' overflow-x-hidden  w-[350px] lg:w-[550px] mx-auto my-4 rounded-2xl drop-shadow-md' src={Laptop} alt='/' />
       
      </div> 

      </div>
    </div>
    </div>
  );
};

export default Hero;
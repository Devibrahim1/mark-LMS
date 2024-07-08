import React from 'react'
import desktop from '../assets/desktops.jpg';
import { FaCheckCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


const Course = () => {
  return (
    <div>
    <div className='w-full py-4 px-2'>
      <div className='max-w-[1240px] mx-auto py-16 grid md:grid-cols-2'>
        
        <img className='w-[600px] mx-auto rounded-2xl drop-shadow-md' src={desktop} alt='/' />

        <div className='flex flex-col justify-center gap-7 mx-10'>


        <div className='flex align-middle justify-self-start pt-10 md:pt-1'>
       <p className='pr-3 text-yellow-500 text-2xl'>< GoDotFill /> </p>
          <p className='text-black text-sm font-semibold'>FEATURED COURSE</p>
          </div>
          <h1 className='text-black text-2xl font-bold md:text-5xl md:font-bold'>Getting Started With Python 3 for Beginner</h1>
          <p className='text-black text-xl font-semibold'>
          Nibh enim nisi amet et nunc varius facilisis nulla non urna pulvinar felis, faucibus id placerat.
          </p>

          <div className='grid md:grid-cols-2 gap-2'>
            <div className='flex align-middle justify-self-start'>
       <p className='py-1 text-blue-700'>< FaCheckCircle /> </p>
        <p className=' px-4 text-md text-black font-semibold'>  Fundamental</p>
        </div>


     <div className='flex align-middle justify-self-start'>
       <p className='py-1 text-blue-700'>< FaCheckCircle /> </p>
        <p className='px-4  text-md text-black font-semibold'>Input and output</p>
        </div>

        <div className='flex align-middle justify-self-start'>
       <p className='py-1 text-blue-700'>< FaCheckCircle /> </p>
        <p className='px-4  text-md text-black font-semibold'>Conditional branching</p>
</div>

        <div className='flex align-middle justify-self-start'>
       <p className='py-1 text-blue-700'>< FaCheckCircle /> </p>
        <p className='px-4  text-md text-black font-semibold'>8+ more lessons</p>
        </div>





        </div>

        <button type="button" class="md:w-40 mb-10 focus:outline-none text-white hover:bg-yellow-400 bg-blue-500  hover:text-white focus:ring-4 focus:ring-yellow-300 text-md font-bold rounded-full py-2 px-2">Start Course</button> 

        </div>

       
      </div>
    </div>



    </div>
  )
}

export default Course
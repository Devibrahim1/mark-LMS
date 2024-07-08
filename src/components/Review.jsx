import React from 'react'
import student from '../assets/sec-3-img.png'
import { FaLongArrowAltRight } from "react-icons/fa";


const Review = () => {
  return (
    <div>
 <div className='w-full pt-6 px-2'>
      <div className='max-w-[1240px] mx-auto py-16 grid md:grid-cols-2'>
        
        <img className='w- my-4 mx-auto md:w-[500px]' src={student} alt='/' />



        <div className='flex flex-col justify-center  gap-5 md:-ml-40 mx-8'>
          <p className='text-black  text-sm md:mb-16 font-semibold'>WHAT OUR HAPPY STUDENT SAY</p>
          <p className='text-black text-2xl md:text-4xl md:leading-snug font-bold'>
          Mauris auctor sit consequat sed aenean purus egestas porta vel fermentum, nec nisi at eget non, nisi tincidunt tempus, etiam eget blandit tortor pulvinar est faucibus tristique blandit volutpat neque sit fusce.
          </p>
          <div className='flex justify-between'>
          <h5 className='py-4 text-center text-xl text-black font-bold '>Elena Miles <br /><span className='text-gray-500 text-start text-lg font-normal'>Student</span></h5>

       
        <h5 className=' pt-20 md:py-4 text-center text-md text-black font-semibold hover:text-yellow-500'>Read All Reviews <span className=' text-black-500 font-bold text-2xl inline-flex align-middle'> <FaLongArrowAltRight /> </span></h5>

        </div>
        </div>
      

       
      </div>
    </div>

    </div>
  )
}

export default Review
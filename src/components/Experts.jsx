import React from 'react'
import { FaFacebook , FaTwitter ,FaYoutube  } from "react-icons/fa";

const Experts = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-8 md:py-16 px-10'>

        <div className='text-center'>
            <p className='font-semibold text-sm py-6 font-sans'>INDUSTRY EXPERTS</p>
            <p className='font-bold text-3xl lg:text-5xl'>Meet The Instructors</p>


        </div>


<div className=' m-auto py-10 grid md:grid-cols-4 '>




<div className= "text-black m-4 ">
    
    <img className="rounded-full w-[80%] md:w-[100%]  m-auto" src='https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-coding-course-instructor-1.jpg' alt="pic"/>
  
  <div className="flex flex-col justify-center my-5">
 
    <p className=" text-center font-bold md:text-lg md:leading-snug text-md">John Aston</p>
    <p className='text-sm text-center font-normal text-gray-500'>Web Development Instructor</p>

    <div className='flex justify-center my-3 '>
          <FaFacebook  size={20} className='' />
          <FaTwitter  size={20}className='mx-6' />
          <FaYoutube size={20}className='' />
        </div>



 
  </div>
</div>

<div className= "text-black m-4 ">
    
    <img className="rounded-full w-[80%] md:w-[100%]  m-auto" src='https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-coding-course-instructor-4.jpg' alt="pic"/>
  
  <div className="flex flex-col justify-center my-5">
 
    <p className=" text-center font-bold md:text-lg md:leading-snug text-md">Erika Mina</p>
    <p className='text-sm text-center font-normal text-gray-500'>Mobile Development Instructor</p>

    <div className='flex justify-center my-3 '>
          <FaFacebook  size={20} className='' />
          <FaTwitter  size={20}className='mx-6' />
          <FaYoutube size={20}className='' />
        </div>



 
  </div>
</div>

<div className= "text-black m-4 ">
    
    <img className="rounded-full w-[80%] md:w-[100%]  m-auto" src='https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-coding-course-instructor-2.jpg' alt="pic"/>
  
  <div className="flex flex-col justify-center my-5">
 
    <p className=" text-center font-bold md:text-lg md:leading-snug text-md">Amy Rose</p>
    <p className='text-sm text-center font-normal text-gray-500'>Machine Learning Instructor</p>
    <div className='flex justify-center my-3 '>
          <FaFacebook  size={20} className='' />
          <FaTwitter  size={20}className='mx-6' />
          <FaYoutube size={20}className='' />
        </div>



 
  </div>
</div>

<div className= "text-black m-4 ">
    
    <img className="rounded-full w-[80%] md:w-[100%] m-auto" src='https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-coding-course-instructor-3.jpg' alt="pic"/>
  
  <div className="flex flex-col justify-center my-5">
 
    <p className=" text-center font-bold md:text-lg md:leading-snug text-md">Adrian Cruz</p>
    <p className='text-sm text-center font-normal text-gray-500'>Data Science Instructor</p>
    <div className='flex justify-center my-3 '>
          <FaFacebook  size={20} className='' />
          <FaTwitter  size={20}className='mx-6' />
          <FaYoutube size={20}className='' />
        </div>



 
  </div>
</div>




</div>








    </div>
  )
}

export default Experts
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import CountUp from 'react-countup';
import Subscribe from './Subscribe';
import Footer from './Footer';

const About = () => {
  return (
    <div className='lg:h-[1900px] md:h-[2000px] h-[1400px]  '>          
       <div className="bg-[url('https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-hero-section-bg.svg')] w-full md:h-[800px] lg:h-[1050px] h-[550px] bg-cover md:bg-center bg-right absolute top-0">

    

   
 


  <div className='md:pt-40 pt-20'> 

      <h2 className='text-white text-4xl md:text-6xl font-bold text-center md:pt-30'>About us</h2>
      <p className='text-white text-lg md:text-xl font-semibold text-center md:leading-8 md:px-10 md:mx-36 px-5 pt-8'>Porta platea eget tincidunt nunc massa fermentum felis, vel, nec interdum et scelerisque blandit nunc faucibus et adipiscing diam cursus aenean nulla.</p>
  
  
      {/* image div */}
  
      <div className='flex justify-center pt-10'>
< img className='rounded-3xl md:w-[70%] w-[90%] h-[50%] md:z-10' src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-coding-course-team-video-thumb-img.jpg" alt="" />

</div>

{/* founder div */}


<div className=' md:w-[65%] flex flex-col justify-center text-center m-auto py-14 gap-4 px-8'>
  <p className='text-blue-600 text-3xl font-extrabold md:text-4xl text-center m-auto md:py-6'><FaQuoteLeft /></p>

  <p className='text-black text-xl md:text-4xl md:leading-snug font-bold'>
  Mauris auctor sit consequat sed aenean purus egestas porta vel fermentum, nec nisi at eget non set, nisi tincidunt tempus, etiam eget blandit tortor pulvinar est faucibus tristique blandit volutpat neque sit fusce.
  </p>
  <p>________</p>
<h5 className='text-xl font-bold'>Mark Odinson</h5>
<p className='-m-4'>Founder</p>


</div>





{/* counter div */}

<div className='grid-cols-1 mb-40 py-10 grid lg:grid-cols-4 mx-auto text-center w-[70%] md:py-20 md:mb-44 gap-6'>
        <div className=''>
          <h3 className='text-black text-xl pt-4 md:text-3xl font-bold'>Let Numbers Talk</h3>

        </div>

        <div className='text-black text-4xl md:text-5xl text-center md:leading-snug font-bold'>
        <CountUp end={200} 
        duration={5}/>
        <span>+</span>
        <p className='text-lg text-center font-normal text-gray-400'>Courses</p>
          
          </div>

          <div className='text-black text-4xl md:text-5xl md:leading-snug font-bold'>
        <CountUp end={30} 
        duration={5}/>
              <p className='text-lg text-center font-normal text-gray-400'>Instructors</p>
       
          
          </div>

          <div className='text-black text-4xl md:text-5xl md:leading-snug font-bold'>
        <CountUp end={4000} 
        duration={5}/>
        <span>+</span>
        <p className='text-lg text-center font-normal text-gray-400'>Students</p>
          
          </div>

</div>


  
  
   </div>


      






     
     
     
     
     
     







     
      </div>





      </div>












  






        

  )
}

export default About
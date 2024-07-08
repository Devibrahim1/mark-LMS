import React from 'react'
import { Link } from 'react-router-dom'

const AllCourses = () => {
  return (
    <div>
      <div className='lg:h-[500px] md:h-[500px] h-[400px]'>
      <div className="bg-[url('https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-hero-section-bg.svg')] w-full md:h-[800px] lg:h-[500px] h-[450px] bg-cover md:bg-right-bottom bg-right absolute top-0">
        <div className='pt-24'>
      <h2 className='text-white text-4xl md:text-6xl font-bold text-center md:pt-20 pt-10 '>Courses</h2>
      <p className='text-white text-lg mx-auto md:text-xl font-semibold text-center pt-8 md:px-20 px-6 pb-16 md:w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      </div>
      </div>

      <div className='max-w-[1240px] mx-auto py-8 md:py-16'>
<h3 className='text-black text-4xl md:text-5xl font-bold pt-20 ml-12 '>Featured Courses</h3>

<div className=' m-auto py-10 grid md:grid-cols-3 mx-5 '>




       <div className="bg-white shadow-xl text-black m-4 ">
           
           <img className="" src='https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-featured-image.jpg' alt="pic"/>
         
         <div className="flex flex-col justify-center gap-4 p-4 m-3">
        
           <p className=" font-bold md:text-3xl md:leading-snug text-sm">Complete Python Masterclass for Web Development</p>

<Link to='/python'><div className='bg-blue-400 text-center text-white text-lg px-6 py-1 rounded-md'>See More...</div></Link>

         </div>
       </div>

       <div className="bg-white shadow-xl text-black m-4 ">
           
           <img className="" src='https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-coding-course-html-5-lesson-cover-img.jpg' alt="pic"/>
         
         <div className="flex flex-col justify-center gap-4 p-4 m-3">
        
           <p className=" font-bold md:text-3xl md:leading-snug text-sm">HTML 5 Web Component Fundamentals</p>



           <Link to='/html'><div className='bg-blue-400 text-center text-white text-lg px-6 py-1 rounded-md'>See More...</div></Link>
         </div>
       </div>

       <div className="bg-white shadow-xl text-black m-4 ">
           
           <img className="" src='https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-coding-course-css-3-lesson-cover-img.jpg' alt="pic"/>
         
         <div className="flex flex-col justify-center gap-4 p-4 m-3">
        
           <p className=" font-bold md:text-3xl md:leading-snug text-sm">MERN Development with React Hooks and Redux</p>



           <Link to='/fullstack'><div className='bg-blue-400 text-center text-white text-lg px-6 py-1 rounded-md'>See More...</div></Link>
         </div>
       </div>

    
</div>





      </div>

      


    </div>
  )
}

export default AllCourses
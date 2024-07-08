import React from 'react'

import { IoIosArrowForward } from "react-icons/io";

import Sidebar from '../../Sidebar';
import { Link } from 'react-router-dom';

const PythonBasic = () => {
  return (
    <>
    <div className='border-b-[1px] border-black'>
<div className='container  pt-8  pb-5 flex justify-between '>
        <img
            src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-logo-dark.svg"
            className={`cursor-pointer md:w-[10%] duration-50 ml-5 md:block hidden`}
          />
          <div className='flex justify-between text-blue-500 hover:text-blue-400 hover:translate-x-2 mr-5 ease-in-out'>

          <Link to="/pythonAdv" className='text-blue-500 hover:text-blue-400 font-bold cursor-pointer md:pr-6 ml-60'>Next Lesson       
           </Link>
           <IoIosArrowForward className='inline-block pt-1 text-2xl  '/> 
          </div>
</div>
</div>
         


        <div className="flex ">

          <Sidebar/>



        
     
   

      <div className=' container  mx-auto w-[90%] '>
      <div className='flex-1 p-8 lg:ml-48'>
    

   

     <div className=' flex-1 flex-col justify-center md:w-[70%] md-ml-10 '>
     <h1 className="md:text-5xl text-3xl text-balance  font-bold pt-2 pb-5 ">Python Basic</h1>

    
     <div className='flex justify-start text-blue-500 hover:text-blue-400  bg-gray-200 rounded-md px-4 py-2 my-3'>

     <Link to="/python" className='text-blue-500 hover:text-blue-400 font-bold cursor-pointer text-xs'>Complete Python Masterclass For Web Development       
 </Link>
 <IoIosArrowForward className='inline-block text-gray-600 my-1 text-sm  '/> 
 <p  className='text-blue-500 hover:text-blue-400 font-bold cursor-pointer text-xs'>Install and Setup</p>
</div>

    
   
    
<div className='flex justify-center'>
<iframe width="780" height="438" src="https://www.youtube.com/embed/HJRzUQMhJMQ" title="Video Placeholder - Brainstorm Force" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>
     


      


<div className=' my-5 border-b-[2px] border-gray-300'>
  

<p className='text-xl font-bold py-4'>Fringilla aliquam amet, molestie morbi faucibus sem quisque accumsan tortor tincidunt molestie sagittis, enim scelerisque feugiat suspendisse augue aliquam elit integer gravida non mus.</p>

<p className='leading-8 text-[18px] font-normal text-gray-500 md:pr-4'>Mi vitae purus urna, viverra risus eget porttitor massa laoreet commodo sed libero sagittis, mauris leo non enim lectus imperdiet suspendisse sed sed integer diam in etiam in commodo tellus nunc nascetur duis amet, id felis in ornare viverra ut justo vitae amet, mauris magnis enim quam maecenas nunc pellentesque nulla pretium id venenatis sapien, nunc, bibendum vitae feugiat diam id vitae at egestas in egestas purus, amet non rhoncus est tortor egestas tincidunt feugiat sapien vitae id vulputate nunc tortor cras viverra tristique lorem eget ultrices blandit pellentesque risus sit fusce tortor suspendisse bibendum vitae id rhoncus placerat nunc.</p>

<p className='leading-8 text-[18px] font-normal text-gray-500 md:pr-4 py-5'>
Est cras vulputate vitae varius mauris et tristique nibh mauris, elementum, pulvinar ultricies enim vel sed et laoreet ultricies leo ac fringilla id pretium dictumst nibh urna dictum vestibulum in quis venenatis vestibulum in lacus, at ut eget vel in mauris facilisis et mattis elementum vestibulum sapien purus ultrices maecenas sed eu lectus in posuere ut nam neque, tristique neque aliquam, leo urna pellentesque ullamcorper lorem facilisis leo tortor porttitor netus in varius risus odio velit eu molestie varius posuere.
</p>


</div>


<div className='flex justify-between flex-wrap text-blue-500 hover:text-blue-400  my-3'>


<Link to="/course" className='text-blue-500 hover:text-blue-400 font-medium cursor-pointer text-md md:ml-64 pt-2 '>Back to Course       
 </Link>
 <div className='flex bg-blue-600 hover:bg-blue-300 py-3 px-2 rounded-3xl'>
 <Link to="/install&setup"  className='text-white  font-bold cursor-pointer text-sm px-3'>Next Lesson</Link>
 <IoIosArrowForward className='inline text-white mt-1 text-sm '/> 
 </div>
</div>

</div>
</div>
</div>
</div>
</>
  )
}

export default PythonBasic
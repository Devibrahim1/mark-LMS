
import React from 'react';
import { Link, NavLink ,useLocation } from 'react-router-dom';

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {




  const location = useLocation();

  // Define an array of paths where you want to hide the Footer
  const hiddenFooterPaths = ['/install&setup', '/pythonAdv', '/pythonBasic'];

  // Check if the current path is in the hiddenFooterPaths array
  const shouldHideFooter = hiddenFooterPaths.includes(location.pathname);

  if (shouldHideFooter) {
    // If the current path is in the hiddenFooterPaths array, return null
    return null;
  }

  return (
    <div className='bg-black'>
    <div className='max-w-[1240px] mx-auto pt-16 pb-10 flex justify-between flex-col  md:grid grid-cols-5 gap-6 text-white bg-black'>
      <div className='ml-12 mr-5 grid col-span-2'>
        {/* <h1 className='w-full text-3xl font-bold text-black'>WsCube Tech.</h1> */}
        <Link to='/'><img width={150} src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-logo-light.svg" alt="" /></Link>
        <p className='py-6 md:py-4 text-lg md:text-lg font-semibold text-left'>Amet morbi justo facilisis integer odio eu feugiat egestas nulla a ipsum morbi iaculis urna nunc.</p>
        <div className='flex justify-start md:justify-self-start md:w-[100%] mb-6 '>
          <FaFacebookSquare size={24} className='mr-5' />
          <FaInstagram size={24} className='mr-5'/>
          <FaTwitterSquare size={24}className='mr-5' />
          <FaGithubSquare size={24}className='mr-5' />
        </div>
      </div>
  
        <div className='text-left ml-12'>
          <h6 className='text-2xl font-bold text-white pb-7 '>Learning Path</h6>
          <ul>
           <NavLink
  to="/html"
  className={({ isActive }) =>
  isActive ? "text-yellow-500 font-bold" : ""
}><li className='pb-2 font-semibold text-lg  hover:text-yellow-500'>Web Development</li></NavLink>
           <NavLink
  to="/fullstack"
  className={({ isActive }) =>
  isActive ? "text-yellow-500 font-bold" : ""
}> <li className='pb-2 font-semibold text-lg hover:text-yellow-500'>Mobile Development</li></NavLink>
              <NavLink
  to="/python"
  className={({ isActive }) =>
  isActive ? "text-yellow-500 font-bold" : ""
}> <li className='pb-2  font-semibold text-lg hover:text-yellow-500'>Machine Learning</li></NavLink>
              <NavLink
  to="/html"
  className={({ isActive }) =>
  isActive ? "text-yellow-500 font-bold" : ""
}> <li className='pb-2  font-semibold text-lg hover:text-yellow-500'>Data Science</li></NavLink>
          </ul>
        </div>
        
        <div className='text-left ml-12'>
          <h6 className='text-2xl font-bold text-white pb-7'>Topics</h6>
          <ul>
              <Link to='/course'><li className='pb-2 font-semibold text-lg hover:text-yellow-500'>HTML</li></Link>
             <Link to='/course'> <li className='pb-2 font-semibold text-lg hover:text-yellow-500'>CSS</li></Link>
              <Link to='/course'><li className='pb-2  font-semibold text-lg hover:text-yellow-500'>Python</li></Link>
              <Link to='/course'><li className='pb-2  font-semibold text-lg hover:text-yellow-500'>JavaScript</li></Link>
          </ul>
        </div>
        
        <div className='text-left ml-12'>
          <h6 className='text-2xl font-bold text-white pb-7'>Get In Touch</h6>
          <ul>
            <li className='pb-2 font-semibold text-lg'>123 Ave, New York,</li>
            <li className='pb-2 font-semibold text-lg'>MNY 12004, USA.</li>
            <li className='pb-2  font-semibold text-lg'>+1 123 456 78 90</li>
            <li className='pb-2  font-semibold text-lg'>mail@example.com</li>
          </ul>
        </div>
       
   
     
    </div>
    <div className='border-solid border-t-2 border-gray-500'>
<div className=' flex flex-wrap justify-center md:justify-between mx-auto max-w-[1240px] '>

  <p className='text-white py-8 md:ml-12'>
  Copyright © 2024 Online Programming Course
  </p>
  <p className='text-white md:py-8 pb-8 '>
  Powered by Online Programming Course
  </p>
</div>
</div>

    </div>
  );
};

export default Footer;


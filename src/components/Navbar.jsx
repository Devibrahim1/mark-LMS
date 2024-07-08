
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink , useLocation } from 'react-router-dom';



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [toggle, setToggle] = useState(true);
  
  const toggleMenu = () => {
    setToggle(!toggle);
  };



  const location = useLocation();

 
  const hiddenNavbarPaths = ['/install&setup', '/pythonAdv', '/pythonBasic'];


  const shouldHideNavbar = hiddenNavbarPaths.includes(location.pathname);

  if (shouldHideNavbar) {
    
    return null;
  }

  return (
<>
<div className='relative container m-auto  '>

<div className=' absolute overflow-x-hidden z-10 container m-auto'>
    <div className='flex justify-between items-center h-24 lg:max-w-[1240px]  mx-auto overflow-hidden bg-transparent text-white '>
    <div className='flex justify-center  items-center ml-10 md:ml-5'>
     <Link to='/'> <img src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-logo-light.svg" alt="" /></Link>
   
      </div>
     <div  className=' justify-end hidden md:flex' >
      <ul className='flex '>

      <NavLink
  to="/"
  className={({ isActive }) =>
  isActive ? "text-yellow-500 font-bold" : ""
}
> <li className='px-5 py-2 font-semibold text-xl hover:text-yellow-500'>Home</li></NavLink>



<NavLink
  to="/course"
  className={({ isActive }) =>
  isActive ? "text-yellow-500 font-bold" : ""
}
><li className='px-5 py-2 font-semibold text-xl hover:text-yellow-500'>All Courses</li></NavLink>


<NavLink
  to="/about"
  className={({ isActive }) =>
  isActive ? "text-yellow-500 font-bold" : ""
}
><li className='px-5 py-2 font-semibold text-xl hover:text-yellow-500'>About</li></NavLink>
        <NavLink
  to="/contact"
  className={({ isActive }) =>
  isActive ? "text-yellow-500 font-bold" : ""
}
>
<li className='px-5 py-2 font-semibold text-xl hover:text-yellow-500'>Contact</li>
</NavLink>
        </ul>
           
          <Link to='/course'> <button type="button" class=" focus:outline-none text-white bg-yellow-400 hover:bg-white  hover:text-black focus:ring-4 text-lg font-semibold rounded-full py-2 px-5 ">Start Learning</button></Link> 
      </div>

      <div onClick={handleNav} className='block px-10 md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      {/* </div> */}
      <ul className={nav ? 'overflow-x-hidden  fixed left-2 top-20 w-[97%] h-[250px] border-r border-r-gray-900 text-black bg-[white] ease-in-out duration-1000' : 'ease-in-out duration-1000 fixed left-[-90%] z-40'}>

  <Link to='/' onClick={toggleMenu}><li className='p-4 border-b border-gray-600'>Home</li></Link>
  <Link to='/course'> <li className='p-4 border-b border-gray-600'>All Courses</li></Link>
  <Link to='/about'><li className='p-4 border-b border-gray-600'>About</li></Link>
  <Link to='/contact'><li className='p-4'>Contact</li></Link>
      </ul>
      </div>
   
    </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;
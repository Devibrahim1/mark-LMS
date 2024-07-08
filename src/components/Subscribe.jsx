import React from 'react'
import {useLocation } from 'react-router-dom';


const Subscribe = () => {



  const location = useLocation();

  // Define an array of paths where you want to hide the Subscribe
  const hiddenSubscribePaths = ['/install&setup', '/pythonAdv', '/pythonBasic'];

  // Check if the current path is in the hiddenSubscribePaths array
  const shouldHideSubscribe = hiddenSubscribePaths.includes(location.pathname);

  if (shouldHideSubscribe) {
    // If the current path is in the hiddenSubscribePaths array, return null
    return null;
  }


  return (
<div className='sub-bg  '>

    <div className='text-center  text-white m-auto px-8 pt-20 mt-5 pb-20 leading-loose '>

        <p className=' text-xl pb-6 font-bold'>SUBSCRIBE</p>
        <h3 className='text-5xl pb-6 font-bold'>All Access Membership</h3>
        <p className=' text-md pb-8 font-semibold '>Dictum enim vel in consectetur arcu nunc habitasse mattis vitae accumsan, etiam ultrices eget non tincidunt.</p>
        <button type="button" class="  focus:outline-none text-black hover:bg-yellow-400 bg-white  hover:text-white focus:ring-4 focus:ring-yellow-300 text-lg font-bold rounded-full py-2 px-7 ">Subscribe & Save</button> 

        </div>

    </div>
  )
}

export default Subscribe
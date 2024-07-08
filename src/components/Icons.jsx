import React from 'react'
import { FaHtml5 ,  FaCss3Alt ,  FaReact ,FaPython ,FaAngular } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

const Icons = () => {
  return (
    <div className='w-full pt-10 px-2'>
       
       <div class= "max-w-[1240px] m-auto grid grid-cols-2 pl-20 grid-rows2 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
    <div class="text-gray-400 text-6xl p-4"><FaHtml5 /></div>
    <div class="text-gray-400 text-6xl p-4">< FaCss3Alt/></div>
    <div class="text-gray-400 text-6xl p-4"><SiJavascript/></div>
    <div class="text-gray-400 text-6xl p-4"><FaNodeJs/></div>
    <div class="text-gray-400 text-6xl p-4">< FaPython/></div>
    <div class="text-gray-400 text-6xl p-4"><FaReact /></div>
    <div class="text-gray-400 text-6xl p-4"><TbBrandNextjs /></div>
    <div class="text-gray-400 text-6xl p-4"><FaAngular/></div>
</div>

    </div>
  )
}

export default Icons
import React from "react";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <>
    
      <div className='lg:h-[1200px] md:h-[1200px] h-[2020px] sm:h-[1700px] relative  '>          
       <div 
        className="bg-[url('https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-hero-section-bg.svg')] w-full md:h-[800px] lg:h-[750px] sm:h-[1300px] h-[1700px] bg-cover sm:bg-right absolute top-0 left-0">


      <div className="max-w-[1240px] m-auto">
        <div className=" grid grid-cols-1 overflow-hidden sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 rounded-b-2xl rounded-t-none shadow-2xl bg-white mt-28 w-[95%] m-auto z-[2] relative py-5">
          <div className="bg-gradient-to-br to-[#f6f5f2e6] from-[#ffffffe3] overflow-hidden ">
            <p className="md:pt-20 pt-10 text-black font-bold  md:text-6xl text-3xl text-center md:text-left px-14 ">
            Contact Us
            </p>
            <p className="ml-14 mt-5 text-lg text-gray-500 pr-10 text-center md:text-left ">
              {" "}
              Consectetur sodales et, congue sem velit et facilisi metus ac, mattis quis est egestas.
            </p>


            <div className="flex flex-col  mx-12 py-8">

              <div className="flex justify-start flex-wrap md:flex-nowrap  border-b-[1px] border-black py-6">


<div className="border-2 border-blue-500 rounded-full h-14 w-14 flex justify-items-center justify-center align-bottom  ">
                <FaLocationDot className="text-blue-500 text-xl mt-4 " />

                </div>

               

                <div className="  sm:ml-10 mt-8 sm:mt-0">
                  <p className="text-sm font-bold text-gray-700">Address</p>
                  
            <a className="block text-black font-bold md:text-lg text-[14] mt-3"
              href="tel:9-334-7565-9787">123 Fifth Avenue, NY 126004, New York, USA.</a>

                </div>


              </div>

              <div className="flex justify-start flex-wrap md:flex-nowrap border-b-[1px] border-black py-6">


                <div className="border-2 border-blue-500 rounded-full h-14 w-14 flex justify-items-center justify-center align-bottom  ">
                <FaPhone  className="text-blue-500 text-xl mt-4 " />

                </div>
                

                <div className=" sm:ml-10 mr-28 mt-8 sm:mt-0">
                  <p className="text-sm font-bold text-gray-700">Call Us</p>
                  
            <a className="block text-black font-bold text-lg mt-3"
              href="tel:+1 123 456 78 90">+1 123 456 78 90</a>

                </div>


              </div>

              <div className="flex justify-start flex-wrap md:flex-nowrap border-b-[1px] border-black py-6">


                <div className="border-2 border-blue-500 rounded-full h-14 w-14 flex justify-items-center justify-center align-bottom  ">
                <IoMdMail  className="text-blue-500 text-xl mt-4 " />

                </div>

                <div className=" sm:ml-10 mr-20 mt-8 sm:mt-0">
                  <p className="text-sm font-bold text-gray-700">Email Us</p>
                  
            <a className="block text-black font-bold text-lg mt-3"
              href="mailto:">hello@example.com</a>

                </div>


              </div>




         
            </div>


           <div className="mx-14 pb-10">
            <p className="text-lg font-semibold pb-5">
            Follow us
            </p>
            <div className='flex justify-start md:justify-self-start md:w-[100%] mb-6 '>
          <FaFacebookSquare size={20} className='mr-7' />
          <FaInstagram size={20} className='mr-7'/>
          <FaTwitterSquare size={20}className='mr-7' />
          <FaGithubSquare size={20}className='mr-7' />
          <FaYoutube  size={20}className='mr-7' />
        </div>


          </div>




          </div>
          <div className="lg:py-20 p-0">
     
            <div className="max-w-md mx-auto shadow shadow-slate-300 rounded p-10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block  text-lg font-bold text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-gradient-to-br to-[#f6f5f2e6] from-[#ffffffe3]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-lg font-bold text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 bg-gradient-to-br to-[#f6f5f2e6] from-[#ffffffe3] rounded-md w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-bold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 bg-gradient-to-br to-[#f6f5f2e6] from-[#ffffffe3] rounded-md w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-bold text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-10 border border-gray-300 bg-gradient-to-br to-[#f6f5f2e6] from-[#ffffffe3] rounded-md w-full"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                     class="md:w-40 focus:outline-none text-white hover:bg-yellow-400 bg-blue-500  hover:text-white focus:ring-4 focus:ring-yellow-300 text-md font-bold rounded-full py-2 px-2">Send Message</button> 

                </div>
              </form>
              {isSent && (
                <p className="mt-4 text-green-600">
                  Message sent successfully!
                </p>
              )}
            </div>
          </div> 
        </div>
        </div>


     <div className="container mx-auto lg:-mt-28 -mt-28">
 <div className="grid grid-cols-1 m-5 ">
          
          <iframe
            className="rounded shadow-lg w-full  "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0338910964488!2d-73.99362858890693!3d40.73927977127021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b24b424f%3A0x618680d3f8c2f773!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2s!4v1710419318730!5m2!1sen!2s"
            width="1200"
            height="450"
            style={{ border: 1 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>









      </div>
      </div>
    </>
  );
}
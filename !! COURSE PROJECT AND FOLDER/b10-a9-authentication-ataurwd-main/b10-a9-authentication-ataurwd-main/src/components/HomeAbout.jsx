import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';


const HomeAbout = () => {

useEffect(() => {
   AOS.init({ duration: 1000, once: true });  
 }, []);
    return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 lg:px-20 lg:py-10">
  {/* Image Section */}
  <div data-aos="fade-up"
 className="flex justify-center">
    <img 
      src="https://img.freepik.com/free-vector/kids-digital-content-abstract-concept-illustration-kids-digital-entertainment-education-online-content-toddlers-children-friendly-media-apps-development_335657-425.jpg?t=st=1731857268~exp=1731860868~hmac=0820efc12b691be7dbd0f287f042342f6d2ad9417949ba5e78aafea6ca63ceef&w=740" 
      alt="Digital Content for Kids" 
      className="w-full max-w-sm md:max-w-md lg:max-w-lg"
    />
  </div>

  {/* Content Section */}
  <div data-aos="fade-up" className="text-center md:text-left">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight animate__pulse">
      A Better Way to Teach Words
    </h1>
    <p className="text-gray-600 mb-4">
      Do you need to learn new words to understand and express yourself clearly in English? The learning materials are organised into two sections, organised by English level.
    </p>
    <p className="text-gray-600 mb-6">
      You will find activities to help you learn the meaning, pronunciation, and spelling of new words. Learning vocabulary will help you improve your language level and communicate in English confidently and effectively.
    </p>
    <button className="px-6 py-2 bg-MainBg text-white rounded-lg shadow-md hover:bg-MainBg-dark transition-all">
      Start your free trial
    </button>
  </div>
</div>

    );
};

export default HomeAbout;
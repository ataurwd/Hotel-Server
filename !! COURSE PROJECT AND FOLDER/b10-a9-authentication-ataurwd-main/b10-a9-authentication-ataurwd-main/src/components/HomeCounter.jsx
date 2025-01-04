import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';

const HomeCounter = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });  
  }, []);
 
  return (
    <div className=" py-10 px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 ">Our Success So Far</h2>
        <p className="text-gray-600 text-lg">We’ve made tremendous progress in helping learners like you. Here’s a snapshot of our achievements.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* User Count */}
        <div data-aos="zoom-in" className="p-6 bg-MainPrimary rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-semibold text-black">
            <CountUp end={1500} duration={3} />
          </h3>
          <p className="text-gray-500">Users Registered</p>
        </div>

        {/* Lesson Count */}
        <div data-aos="zoom-in" className="p-6 bg-MainPrimary rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-semibold text-black">
            <CountUp end={120} duration={5} />
          </h3>
          <p className="text-gray-500">Lessons Available</p>
        </div>

        {/* Vocabulary Count */}
        <div data-aos="zoom-in" className="p-6 bg-MainPrimary rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-semibold text-black">
            <CountUp end={5000} duration={3} />
          </h3>
          <p className="text-gray-500">Vocabulary Words</p>
        </div>

        {/* Tutorial Count */}
        <div data-aos="zoom-in" className="p-6 bg-MainPrimary rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-semibold text-black">
            <CountUp end={30} duration={6} />
          </h3>
          <p className="text-gray-500">Tutorials Created</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCounter;

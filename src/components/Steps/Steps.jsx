import React from "react";
import { FaUser } from "react-icons/fa6";
import createAccountIcon from '../../assets/user.png'
import choseIcon from '../../assets/package.png'
import Rocket from '../../assets/rocket.png'
const Steps = () => {
  return (
    <div className=" bg-gray-100 pb-12">
        <div className="md:w-10/12 lg:w-8/12 mx-auto ">
      <h1 className="text-center font-bold text-4xl">Get Started in 3 Steps</h1>
      <p className="text-center p-5 text-gray-600">Start using premium digital tools in minutes, not hours.</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 ">

        <div className="flex items-center justify-center  my-5">
          <div className="relative bg-white  w-80  rounded-xl shadow-md p-6 text-center ">
            <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold w-7 h-7 flex items-center justify-center rounded-full">
              01
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-100 p-5 rounded-full">
                <img src={createAccountIcon} alt="" />
              </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Create Account
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Sign up for free in seconds. <br /> No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center  ">
          <div className="relative bg-white w-80  rounded-xl shadow-md p-6 text-center">
            <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold w-7 h-7 flex items-center justify-center rounded-full">
              02
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-100 p-5 rounded-full">
                <img src={choseIcon} alt="" />
              </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Choose Products
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Browse our catalog and <br /> select the toolsthat fit your needs.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="relative bg-white  w-80  rounded-xl shadow-md p-6 text-center">
            <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold w-7 h-7 flex items-center justify-center rounded-full">
              01
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-100 p-5 rounded-full">
             <img src={Rocket} alt="" />
              </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
             Start Creating
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Download and start <br /> using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Steps;

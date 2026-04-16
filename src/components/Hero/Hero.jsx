import React from "react";
import bannerIMG from "../../assets/banner.png";
import CircleImg from "../../assets/products/Group 5 (1).png";
import playBTN from "../../assets/products/Vector.png";
const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-20 mx-auto w-10/12 mg:w-8/12 gap-10 items-center content-center justify-center">
      <div className="space-y-5">
        <div className="flex items-center gap-2 p-2 bg-[#E1E7FF] rounded-3xl w-fit px-3">
          <img src={CircleImg} alt="" className="w-5 h-5" />
          <p className="text-sm font-semibold text-purple-700">
            New: AI-Powered Tools Available
          </p>
        </div>
        <h1 className=" text-3xl md:text-5xl font-bold">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-gray-500">
          Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-3">
          <button className="btn p-4 text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Explore Products
          </button>
          <button className="flex items-center gap-1 px-4 rounded-full border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-300">
            <span>
              <img src={playBTN} alt="" />
            </span>

            <span className="font-medium">Watch Demo</span>
          </button>
        </div>
      </div>
      <div>
        <img src={bannerIMG} alt="" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div className="w-8/12 mx-auto my-10">
      <div>
        <h1 className="text-center font-semibold text-4xl">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-center text-gray-500 py-4">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid justify-center gap-10 my-6 lg:grid-cols-3">
        <div>
          <div className="card w-[320px] h-[440px] bg-[#f9fafc] shadow-sm">
            <div className="card-body  bg-[##f9fafc] h-[440px]">
              <span className="text-2xl">Starter</span>
              <p className="text-xl text-gray-500">
                Perfect for getting started
              </p>

              <h1 className="text-4xl font-semibold">
                $0<span className="text-lg text-gray-500">/Month</span>
              </h1>

              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li className="flex items-center gap-2 text-gray-500 text-lg">
                  <FaCheck className="text-green-500" />
                  Access to 10 free tools
                </li>
                <li className="flex items-center gap-2 text-gray-500 text-lg">
                  <FaCheck className="text-green-500" />
                  Basic templates
                </li>
                <li className="flex items-center gap-2 text-gray-500 text-lg">
                  <FaCheck className="text-green-500" />
                  Community support
                </li>
                <li className="flex items-center gap-2 text-gray-500 text-lg">
                  <FaCheck className="text-green-500" />1 project per month
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn rounded-4xl btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-[320px] h-[440px] mb-8">
          <div className="relative  rounded-2xl p-[1px] bg-linear-to-r from-purple-600 to-pink-500 shadow-lg">
            <div className="bg-linear-to-br from-[#5b3df5] to-[#a020f0] rounded-2xl p-6 text-white relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-100 text-orange-500 text-sm px-4 py-1 rounded-full font-medium shadow">
                Most Popular
              </div>

              <h2 className="text-2xl font-semibold mb-1">Pro</h2>
              <p className="text-sm text-purple-100 mb-6">
                Best for professionals
              </p>

              <h1 className="text-4xl font-bold mb-6">
                $29
                <span className="text-lg font-normal text-purple-100">
                  {" "}
                  /Month
                </span>
              </h1>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-white" />
                  <span>Access to all premium tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-white" />
                  <span>Unlimited templates</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-white" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-white" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-white" />
                  <span>Cloud sync</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-white" />
                  <span>Advanced analytics</span>
                </li>
              </ul>

              <button className="w-full bg-gray-100 text-purple-600 font-semibold py-3 rounded-full hover:bg-white transition">
                Start Pro Trial
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-[320px] h-[440px]  bg-[#f9fafc] shadow-sm">
            <div className="card-body  bg-[##f9fafc] h-[440px]">
              <span className="text-2xl">Enterprise</span>
              <p className="text-xl text-gray-500">
                For teams and businesses
              </p>

              <h1 className="text-4xl font-semibold">
                $99<span className="text-lg text-gray-500">/Month</span>
              </h1>

              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li className="flex items-center gap-2 text-gray-500 text-lg">
                  <FaCheck className="text-green-500" />
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2 text-gray-500 text-lg">
                  <FaCheck className="text-green-500" />
                  Team collaboration
                </li>
                <li className="flex items-center gap-2 text-gray-500 text-lg">
                  <FaCheck className="text-green-500" />
                 Custom integrations
                </li>
                <li className="flex items-center gap-2 text-gray-500 text-lg">
                  <FaCheck className="text-green-500" />Dedicated support
                </li>
                <li className="flex items-center gap-2 text-gray-500 text-lg">
                  <FaCheck className="text-green-500" />SLA guarantee
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn rounded-4xl btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

import React from "react";
import cartIcon from '../../assets/products/shopping-cart.png'
const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="navbar justify-between w-11/12 mx-auto ">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu text-[#101727] font-semibold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
            </ul>
          </div>
          <a className=" md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-600">DigiTools</a>
        </div>
        <div className=" hidden lg:flex">
          <ul className="gap-4 text-[#101727] font-semibold menu-horizontal px-1">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img className="" src={cartIcon} alt="nothis" />
          <a className="font-semibold" href="">Login</a>
          <a className="btn text-white rounded-3xl bg-linear-to-r from-purple-800 to-purple-600">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

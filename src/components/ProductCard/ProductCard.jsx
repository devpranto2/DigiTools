import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";

const ProductCard = ({ products ,addToCart ,cart ,setCart}) => {
    const [activeButtonId, setActiveButtonId] = useState(null);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-15 ">
      {products.map((product) => {
        // console.group(product);
        const { name, period, tag, id, price, icon, description, features } =
          product;
      

        const handleActivebtn = (productId) => {
          setActiveButtonId(productId);
          addToCart();
          toast.success('added to cart');
          setCart([...cart,product])
        };
         const isActive = activeButtonId === id;
        return (
          <div key={id} className="bg-gray-100 grid-cols-3 ">
            <div className="relative bg-white rounded-2xl shadow-md border border-gray-200 p-6">
              {tag === "popular" && (
                <span className="absolute top-4 right-4 bg-orange-100 text-orange-500 text-xs font-medium px-3 py-1 rounded-full">
                  {tag}
                </span>
              )}

              {tag === "new" && (
                <span className="absolute top-4 right-4 bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
                  {tag}
                </span>
              )}

              {tag === "best seller" && (
                <span className="absolute top-4 right-4 bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  {tag}
                </span>
              )}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100">
                <img src={icon} alt="icon" className="w-7 h-7" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-left text-gray-900">
                {name}
              </h2>

              <p className="mt-2 text-gray-500 text-left text-sm">
                {description}
              </p>
              <div className="mt-4 text-left">
                <span className="text-2xl font-bold text-gray-900">
                  ${price}
                </span>
                <span className="text-gray-500 text-sm">/{period}</span>
              </div>

              <div className="text-left ">
                <p className="flex gap-2 items-center">
                  <FaCheck className="text-green-500" />
                  {features[0]}
                </p>
                <p className="flex gap-2 items-center">
                  <FaCheck className="text-green-500" />
                  {features[1]}
                </p>
                <p className="flex gap-2 items-center">
                  <FaCheck className="text-green-500" />
                  {features[2]}
                </p>
                <p className="flex gap-2 items-center">
                  <FaCheck className="text-green-500" />
                  {features[3]}
                </p>
              </div>

              <button
                onClick={() => handleActivebtn(id)}
                className={`mt-6 w-full py-3 rounded-full font-medium shadow-md hover:opacity-90 transition ${
                  isActive
                    ? "bg-green-600 text-white"  // Active - Green
                    : "bg-linear-to-r from-purple-600 to-violet-500 text-white"  // Inactive - Purple
                }`}
              >
                {isActive ? "Added to Cart" : "Buy Now"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;

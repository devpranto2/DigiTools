import React, { use } from "react";
import Products from "../Products/Products";

const CardsSection = ({ cardsPromise }) => {
  const products = use(cardsPromise);
//   console.log(products);
  return (
    <div>
      <div className="bg-gray-100 py-16 px-4 flex justify-center">
        <div className="text-center max-w-2xl">
         
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Premium Digital Tools
          </h1>

          <p className="mt-4 text-gray-500 text-lg">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>


          <div className="mt-8 inline-flex items-center bg-white rounded-full shadow-sm border border-gray-200 p-1">
                <button className="px-6 py-2 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-md">
                Products
                </button>
                <button className="px-6 py-2 rounded-full text-gray-700 font-medium">
                Cart (2)
                </button>
          </div>
          <Products products={products}></Products>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;

import React, { use, useState } from "react";
import Products from "../Products/Products";
import Carts from "../Carts/Carts";

const CardsSection = ({ cardsPromise, addToCart, cartCount, setCartCount ,addToCartMinus}) => {
  const products = use(cardsPromise);
  //   console.log(products);
  const [selected, setSelected] = useState("products");
  const [cart, setCart] = useState([]);
  // console.log(selected)

  return (
    <div className="">
      <div className="bg-gray-100 py-16 px-4 flex justify-center">
        <div className="text-center md:w-10/12  lg:w-10/12 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Premium Digital Tools
          </h1>

          <p className="mt-4 text-gray-500 text-lg">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>

          <div className="mt-8 gap-3 inline-flex items-center bg-white rounded-full shadow-sm border border-gray-200 p-1">
            {/* //-------------- */}
            <button
              onClick={() => setSelected("products")}
              className={`px-6 ${selected === "products" ? "bg-linear-to-r from-purple-500 to-indigo-500 text-white" : ""} py-2 rounded-full  font-medium shadow-md`}
            >
              Products
            </button>
            {/* ---------------- */}
            <button
            type="button"
              onClick={() => setSelected("selected")}
              className={`px-6 ${selected === "selected" ? "bg-linear-to-r from-purple-500 to-indigo-500 text-white" : ""} py-2 rounded-full  font-medium shadow-md`}
            >
              Cart ({cart.length})
            </button>
            {/* ------------- */}
          </div>
          {selected === "products" ? (
            <Products
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
              products={products}
            ></Products>
          ) : (
            <Carts
              cartCount={cartCount}
              setCartCount={setCartCount}
              cart={cart}
              setCart={setCart}
              addToCartMinus={addToCartMinus}
            ></Carts>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;

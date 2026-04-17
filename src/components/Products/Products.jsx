import React from "react";
import { CgCheck } from "react-icons/cg";
import { FaCheck } from "react-icons/fa6";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ products ,addToCart ,cart,setCart}) => {
  //   console.log(products);
  return (
   <ProductCard cart={cart} setCart={setCart} addToCart={addToCart} products={products}></ProductCard>
  );
};

export default Products;

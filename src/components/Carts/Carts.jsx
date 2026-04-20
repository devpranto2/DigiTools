import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const Carts = ({ cart, setCart ,cartCount,
          setCartCount,addToCartMinus}) => {
  let total = 0;

  for (let item of cart) {
    total += item.price;
  }

  const handleDeleteCart = (cartItem) => {
    console.log(cartItem);
    const filterCart = cart.filter((singlecart) => singlecart.id !== cartItem.id);
    toast.warning("Item removed from cart!")
    setCart(filterCart);
    addToCartMinus();
    console.log(filterCart);
  };

  const handleProceedButton =() =>{
    if(cart.length===0){
      toast.info("cart is already empty");
      return;
    }
    setCart([]);
    if(setCartCount){
      setCartCount(0)
    }toast.success("order placed succesfully")
  }
  return (
    <div className="md:w-11/12 lg:w-8/12 mt-10 mx-auto bg-gray-100 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl text-left font-semibold mb-4">Your Cart</h2>

     
      {cart.length === 0 ? (
        
        <div className="text-center py-12">
          <div className="text-6xl mb-4 flex justify-center text-gray-500"><FaCartShopping /></div>
          <h3 className="text-xl font-semibold text-gray-500 mb-2">Your cart is empty</h3>
        
        </div>
      ) : (
    
        <>
          <div className="space-y-4">
            {cart.map((singleCart, ind) => {
              return (
                <div
                  key={ind}
                  className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <img src={singleCart.icon} alt="" />
                    </div>

                    <div>
                      <h3 className="font-medium">{singleCart.name}</h3>
                      <p className="text-gray-500 text-sm text-left">
                        ${singleCart.price}
                      </p>
                    </div>
                  </div>

                 
                  <button
                  type='button' 
                    onClick={() => handleDeleteCart(singleCart)} 
                    className="text-pink-500 text-sm cursor-pointer hover:text-pink-700"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

         
          <div className="flex justify-between mt-6 font-semibold text-lg">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <button onClick={handleProceedButton} className="w-full mt-4 py-3 rounded-full text-white font-medium bg-linear-to-r from-purple-600 to-pink-500">
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Carts;
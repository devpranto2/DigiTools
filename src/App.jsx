
import { Suspense, useState } from 'react'
import './App.css'
import CardsSection from './components/CardsSection/CardsSection'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import { ToastContainer } from 'react-toastify'
import { DiVim } from 'react-icons/di'


const fetchData = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };
  const cardsPromise = fetchData();

  return (
    <>
      <Navbar cartCount={cartCount}></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      <Suspense fallback={<div className='flex justify-center'><span className="loading loading-bars loading-xl "></span></div>}>
      <CardsSection 
          addToCart={addToCart}
          cardsPromise={cardsPromise}>

      </CardsSection>
      </Suspense>
       <ToastContainer />
    </>
  )
}

export default App


import { Suspense } from 'react'
import './App.css'
import CardsSection from './components/CardsSection/CardsSection'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'


const fetchData = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  
  const cardsPromise = fetchData();

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <CardsSection cardsPromise={cardsPromise}></CardsSection>
      </Suspense>
    </>
  )
}

export default App

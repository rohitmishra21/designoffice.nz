import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Cooked = () => {
 useEffect(() => {

 }, [])
 
  return (
    <>
    <div className='anim w-full h-screen relative bg-[#EDEDED] '>
       <div className="w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
                <div className="border border-dotted z-40 border-black relative"></div>
                <div className="border border-dotted z-40 border-black flex flex-col justify-end relative">
                  <h1 className='text-xl capitalize  leading-tight'>sub-brand</h1>
                  <h1 className='text-xl capitalize  leading-tight'>book design</h1>
                  <h1 className='text-xl capitalize  leading-tight'>packaging</h1>
                  <h1 className='text-xl capitalize  leading-tight'>photography</h1>
                </div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative bg-[url('https://images.prismic.io/motionsickness/ZkwKcCol0Zci9TWh_FENZ_YC_TheCookedBook2.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&rect=0%2C0%2C1331%2C1331&w=800&h=2000&dpr=2&q=50')] bg-cover bg-center "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative flex justify-between "></div>

                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative ">
                  <h1 className='text-[4vw] font-bold leading-none'>You're
                     <br />
                   Cooked</h1>
                </div>
                <div className="border border-dotted z-40 border-black relative "></div>

                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative ">
                  <h1 className='text-[1.2vw] leading-tight absolute bottom-1 font-semibold'>
                  Arming the intoxicated masses with a bevy of fireproof recipes. A cooked cookbook, if you will. Like any indulgent evening, things get increasingly murky the further you go. You’re Cooked mirrors this, becoming increasingly visually distorted as we progress from chapter to chapter, deeper into the night
                  </h1>
                </div>
                <div className="border border-dotted z-40 border-black relative bg-[url('https://images.prismic.io/motionsickness/58c672d5-632d-42d4-88c8-bfe477732935_design-office-2.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&rect=0%2C0%2C1600%2C1600&w=800&h=2000&dpr=2&q=50')] bg-cover bg-center"></div>
      </div>
      <div className='w-[60%] absolute left-4 bottom-4'><img src="https://images.prismic.io/motionsickness/ZkUoEyol0Zci9LoO_spreadsGIF.gif?ixlib=js-3.3.0&auto=format%2C%20compress&rect=0%2C0%2C1196%2C604&w=1000&h=1010&dpr=2&q=50" alt="" /></div>
    </div>
      
    </>
  )
}

export default Cooked
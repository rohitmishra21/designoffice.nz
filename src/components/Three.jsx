import React from 'react'
import anni from '../assets/full.mp4'
const Three = () => {
  return (
    <>
       <div className='w-full h-screen bg-black'>
        <div className='flex justify-center items-center w-full h-screen'>
        <video src={anni} autoPlay loop muted width="1055" height="642"></video>
        </div>
      
    </div>
    </>
 
   
  )
}

export default Three
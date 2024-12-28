import React, { useRef, useState } from 'react'
// import Text from '../components/Text'
import Down from '../components/Down'
import { useGSAP } from '@gsap/react';
import gsap  from 'gsap'

const Page1 = () => {
  const tilted = useRef(0);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const handlemousemove =(e)=>{
     const {clientX, clientY, currentTarget} = e;
     const { width, height,left,top} = currentTarget.getBoundingClientRect();

    const x = clientX - left - width/2;
    const y = clientY - top - height/2;

    const tiltX = (y/height) * -70;
    const tiltY = (x/width) * 70;

     
     
       gsap.to(tilted.current,{
        rotateX: tiltX,
        rotateY: tiltY,
        transformPerspective: 1000, 
        ease: 'power2.out',
        duration: 0.3
       })
    
     
  };

  return (
    <div
     onMouseMove={(e)=> handlemousemove(e)}
     className=' p-4'>
      <div className='w-full h-full bg-gradient-to-r from-black to-gray-600 rounded-3xl'>
        <img
        className='px-16 py-10 w-content'
        src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="logoImg" />
       <div
     ref={tilted}
      className="w-fit ml-16 mt-20 font-bold">
      <h1 className="text-[4vw] text-white">I AM <span className="text-black">DARK MODE</span>™ </h1>
      <h1 className="text-[8vw] text-white leading-[10vh] ">DESIGNER</h1>
      <h1 className="text-[4vw] text-white pt-2">TO HIRE</h1>
    </div>
      <Down/>
      </div>
      
    </div>
  )
}

export default Page1

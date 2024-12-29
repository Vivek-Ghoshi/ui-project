import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page2 = () => {
  useGSAP(()=>{
     gsap.from('#text h1',{
        y: 100,
        rotateX: -90,
        opacity:0,
        duration: 1.5,
        delay: 3,
        ease:'power4.out',
        stagger: 0.3
     })
  },[])
  return (
    <div className='w-screen bg-white'>
        <div className='w-full py-2 text-center h-content '>
            <h1 className='text-xl text-zinc-400'>
            ©  anzo.studio 2024 | designed and developed</h1>
        </div>
        <div id='text' className='w-full text-center mt-20 text-[40vw] leading-[32vw] bg-blue font-[extrabold]'>
            <h1>IMPACTFUL</h1>
            <h1>DESIGN</h1>
            <h1>IS THE</h1>
            <h1>DESIGN</h1>
            <h1>THAT</h1>
            <h1>WORKS</h1>


        </div>
      
    </div>
  )
}

export default Page2

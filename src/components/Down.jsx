import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Down = () => {
  useGSAP(()=>{
    gsap.to('.rotated img',{
      rotate: 360,
      duration: 5,
      repeat:-1,
      ease:'linear'

    })

  },[])
  return (
    <div className='flex'>
      <div className='w-screen text-white px-16 py-10'>
        <h2 className='font-bold'>BRAND DESIGN | WEBSITE DESIGN</h2>
        <h2 className='font-light'>BESPOKE FREELANCE</h2>
      </div>
      <div  className='w-content fixed right-0 top-[67vh] gap-5 px-20 flex flex-col'>
        <div  className='rotated w-16 h-16  rounded-full bg-blue-600'>
            <img src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
        </div>
        <div className='rotated w-16 h-16 rounded-full bg-blue-600'>
            <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="" />
        </div>
       
      </div>
    </div>
  )
}

export default Down

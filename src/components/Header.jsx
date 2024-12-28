import React from 'react'

const Header = () => {
  return (
    <>
    <div className='w-full fixed px-24 py-16 flex justify-end'>
      <button className='font-md px-12 py-3 bg-black text-white border-4 rounded-full border-white hover:bg-gray-600 font-semibold'>Hire me</button>
      <i className="text-2xl text-white ri-draggable"></i>
    </div>
    </>
  )
}

export default Header

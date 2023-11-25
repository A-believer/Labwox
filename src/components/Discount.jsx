/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Discount({discountRef}) {

  return (
      <div ref={discountRef} className='absolute -bottom-28 right-10 text-xs p-4 bg-white shadow-2xl border border-orange'>
          <p className='flex justify-between gap-x-5 font-bold'><span>Cart Items Number</span> <span>Discount Account Applied</span></p>
          <p className='flex justify-between'><span>`&gt;`10</span><span>5%</span></p>
          <p className='flex justify-between'><span>`&gt;`20</span><span>8%</span></p>
          <p className='flex justify-between'><span>`&gt;`30</span><span>10%</span></p>
          <p className='flex justify-between'><span>`&gt;`50</span><span>15%</span></p>
    </div>
  )
}

export default Discount
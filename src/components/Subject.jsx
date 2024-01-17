import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Subject = () => {
  return (
    <div className='px-3 lg:px-24 lg:py-15 top-20'>
    <div className='flex md:flex-row items-center h-full px-3 lg:px-24 lg:py-20'>
      <MdHomeFilled className='mr-2' />
      <IoIosArrowForward className='mr-2' />
      <h1 className='mr-1'>flashcard</h1>
      <IoIosArrowForward className='mr-2' />
      <h1 className='mr-1 text-black'>Mathematics</h1>
      <IoIosArrowForward className='mr-2' />
      <h1 className='mr-1 text-blue-900'>Relation and Function</h1>
    </div>

    <div className='px-3 lg:px-24 '>
<h1 className='text-blue-900 font-bold text-3xl '>Relation  and  Function ( Mathematics )</h1>
    </div>
  </div>
  
  )
}

export default Subject
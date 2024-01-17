import React from 'react'
import { MdLightbulbOutline } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { FaPlusCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Task = () => {
  return (
    <div className='px-3 lg:px-24 py-20 '>


<div className='flex justify-center items-center'>
  <ul className='flex space-x-10'>
    <button className="group relative">
      Study
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </button>
    <button className="group relative">
      Quiz
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </button>
    <button className="group relative">
      Test
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </button>
    <button className="group relative">
      Game
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </button>
    <button className="group relative">
      Other
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </button>
  </ul>
</div>


<div className='py-8 z-[3]'>
  <div className='px-4 lg:px-24 bg-blue-600 justify-center items-center h-[300px] w-[550px] m-auto rounded-[25px] relative z-[5]'>
     <div className='ml-[-100px] px-10 absolute py-8  w-full z-[7] '>
      <div className='flex justify-between items-start text-3xl text-white '>
        <div>
          <MdLightbulbOutline className='' />
        </div>
        <div>
          <IoMdVolumeHigh />
        </div>
      </div>
      <h1 className='flex justify-center py-20 m-auto text-3xl text-white'>x + y = 5</h1>
    </div>
  </div>

</div>
 {/* next */}
<div className='w-full z-[-3]'>
<div className='flex  gap-12  text-blue-900 justify-center items-center font-bold text-2xl'>
<FaArrowRotateRight className=''/>
<IoIosArrowDropleftCircle className='text-5xl '/>
<h1 className='text-black'>01/10</h1>
<IoIosArrowDroprightCircle className='text-5xl' />
<MdOutlineZoomOutMap/>
</div>
</div>

{/* logo */}
<div className='flex justify-between px-24 py-10 text-3xl text-blue-900'>
  <div className='flex items-center'>
  <SiSololearn className="inline-block text-3xl items-center shadow-lg rounded-[25px] mr-2 shadow-blue-900 w-14 h-14 px-3 " />
  <div className='flex justify-between '> <sup className='text-[12px] flex-cols '>publish by</sup>
  
  Hygge<span className='font-bold '>X</span>  </div>
 
  </div>
  <div className='flex gap-2 items-center'>
    <FaPlusCircle/>
    
<h1>Create flashcard</h1>

  </div>

</div>

<div>
  <div className='px-24 '>
<h1 className='text-3xl font-semibold text-blue-900 '>FAQ</h1>
  </div>

  <div className=' py-10 px-24 w-[75%] space-y-5 '>
    <div className='flex items-center border-[1px] py-3 px-3 border-blue-600 rounded-md  justify-between'>Can education flashcards be used for all age groups? <RiArrowDropDownLine /></div>
<div className='flex items-center border-[1px] py-3 px-3 border-blue-600 rounded-md justify-between'>How do education flashcards works? <RiArrowDropDownLine /></div>
<div className='flex items-center border-[1px] py-3 px-3 border-blue-600 rounded-md justify-between' >Can education flashcards be used for test preparation? <RiArrowDropDownLine /></div>

  </div>


</div>

</div>

  )
}

export default Task
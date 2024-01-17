import React from 'react'
import { SiSololearn } from "react-icons/si";


const Navbar = () => {



  return (
    <header className='px-3 lg:px-24 w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-[10] h-10'>
    <nav className={`px-3 lg:px-24 h-10 sticky top-0 left-0 right-0 bg-white text-black`} >

        <div className='flex justify-between items-center gap-8 font-bold h-10  text-3xl'>

         <div className='flex items-center gap-2  text-blue-800 font-normal'>
       <SiSololearn className="inline-block text-3xl " />Hygge<span className='font-bold ml-[-8px]'>X</span>     </div>

<ul className='md:flex space-x-12 hidden font-normal  text-[15px] '>
         <div>Home</div>
         <div>Flashcard</div>
         <div>Contact</div>
         <div>FAQ</div>
         <div className='w-full '><button className='bg-blue-800 px-8 text-white rounded-[25px] '>Login</button></div>

         </ul>
         
        
  


       </div>

         


    </nav>
    
    </header>
  )
}

export default Navbar
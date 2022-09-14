import React from 'react'
import Input from "./Input";
import "./Header.css";
import { useState } from 'react';
import { Transition } from "@headlessui/react";


function Header() {
  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="header-section text-xl h-96 pb-5 overflow-auto" >
     <header className="header grid-cols-1 py-5 mx-20 text-white hidden md:block" >
            <ul className="nav-bar flex m-auto justify-end  gap-8 text-lg">
                <li> <a href="/" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>Get The App</a> </li>
                <li> <a href="/" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>Inverstor Relations</a></li>
                <li> <a href="/" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>Add restaurant</a></li>
                <li> <a href="/" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>Log in</a></li>
                <li> <a href="/" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>Sign up</a></li>
            </ul>
        </header>
        

        <header className=' block md:hidden p-2'>
            <button 
            onClick={()=>setIsOpen(!isOpen)}
            type='button'
            className=' inline-flex item-center  justify-start p-2 rounded-sm text-white bg-gray-900 '
            aria-controls='mobile-menu' 
            aria-expanded="false">
                {!isOpen?(
                   <svg
                   className="block h-6 w-6"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   aria-hidden="true"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 12h16M4 18h16"
                   /> 
                    </svg>
                ):(
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:/-/www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
            </button>
            <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo = "opacity-100 scale-100"
        leave = "transition ease-in duration-75 transform"
        leaveFrom  = "opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref)=>(
          <div className='md:hidden' id='mobile-menu'>
              <div ref={ref} className="px-2 pt-10 pb-3  sm:px-3 bg-black h-72 text-center ">
              <a href="/" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>Get The App</a>
                  <a href="/" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>Inverstor Relations</a>
                  <a href="/" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>Add restaurant</a>
                  <a href="/" className=' hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>Log in</a>
                  <a href="/" className='bg-blue-900 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>Sign up</a>
              </div>
          </div>
        )}
      </Transition>
        </header>
        
        <div className="content-wrapper p-12 ">
            <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="zomoto-wrapper" className='w-64 justify-center m-auto pb-12' />
            <h1 className='text-white font-bold md:text-3xl text-center text-2xl'>Discover the best food & drinks in your city</h1>
        </div>

     

        <Input/>
    </div>
  )
}

export default Header
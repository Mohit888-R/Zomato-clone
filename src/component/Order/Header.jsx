import React,{useState} from 'react'
import Search from "./Input";
import { Transition } from "@headlessui/react";

function Header() {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div>
        <div className='md:flex md:w-10/12 md:m-auto md:justify-center md:py-5 hidden'>
            <a href="/" className='px-10 self-center'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo" className='w-32'/>
            </a>
            <div className='md:block hidden'>
            <Search/>
            </div>
            <div className='self-center text-gray-600'>
            <button className='px-5 border border-red-400 p-2 rounded-md mx-5 bg-gray-50 hover:bg-gray-100 active:scale-105 hover:border-black transform duration-200 ease-in-out'>Log in</button>
            <button className='px-5 border border-red-400 p-2 rounded-md bg-gray-50 hover:bg-gray-100 active:scale-105 hover:border-black transform duration-200 ease-in-out'>Sign up</button>
            </div>
        </div>


        {/* responsive */}
        <header className=' block md:hidden p-2'>
        <div className='flex px-10'>
            <button 
            onClick={()=>setIsOpen(!isOpen)}
            type='button'
            className=' inline-flex item-center  justify-start p-2 rounded-sm text-white bg-gray-700 '
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
            <a href="/" className='px-10 self-center m-auto justify-center'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo" className='w-32'/>
            </a>
            </div>
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
          <div className='md:hidden gap-5' id='mobile-menu'>
              <div ref={ref} className="px-2 pt-10 pb-3 sm:px-3 bg-gray-700 h-72 text-center grid gap-2 ">
                <div className=' text-white  grid gap-4 m-auto justify-center  text-center'> 
                <a href="/" className='border border-white w-28  px-5 py-2 rounded-lg active:scale-105 tranform duration-100 ease-in-out'>Log in</a>
                <a href="/" className='border border-white w-28  px-5 py-2 rounded-lg active:scale-105 tranform duration-100 ease-in-out'>Sign up</a>
                </div>
                <div><Search/></div>
              </div>
          </div>
        )}
      </Transition>
        </header>
    </div>
  )
}

export default Header
import React from 'react'
import {BiSearchAlt} from "react-icons/bi"


function Input() {
  return (
    <div>
        <div className='input-location  flex justify-center m-auto  lg:w-6/12 md:w-96 w-4/12 '>
            <input type="text" className=' flex-1 border  border-slate-sm  shadow-sm p-1 focus:outline-none focus:border-slate-500 rind-sky-500 rounded-l-lg px-5 text-sm' placeholder='Enter Location' /><div className='bg-white self-center p-3 border border-white rounded-tr-md rounded-br-md px-5 '><BiSearchAlt  className='self-center active:scale-150 active:text-blue-500 text-red-500'/></div>
        </div>
    </div>
  )
}

export default Input
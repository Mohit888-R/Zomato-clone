import React from 'react'
import {BiRightArrowAlt  } from "react-icons/bi";

function Card(props) {
  return (
    <a href={props.href}> 
    <div className='border p-3 rounded-xl shadow-md md:my-0 my-4'>
       <h1 className='text-xl  text-gray-900'>{props.locality}</h1>
       <div className='flex'>
       <p className='font-light text-sm text-gray-700 flex-1'>{props.places} Places</p>
       <BiRightArrowAlt className='text-end self-center'/>
       {/* <p className='text-md text-end px-5'></p> */}
       </div>
    </div>
    </a>
  )
}

export default Card
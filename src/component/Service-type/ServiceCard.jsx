import React from 'react'
import {Link} from "react-router-dom";
function ServiceCard(props) {
  return (
    <Link to="/order">
    <div className=' service-type border-2 border-none bg-gray-50 inline-block shadow-md  rounded-lg m-2 overflow-hidden lg:w-72 '>
      <div className='overflow-hidden p-2'>
        <img src={props.image} alt="img" className='w-96 rounded-lg pb-2 hover:scale-105 transition duration-500 ease-in-out ' />
        </div>
        <h2 className='text-xl font-medium text-gray-700 px-2 '>{props.title}</h2>
        <p className='text-md font-normal text-gray-600 px-2 py-1'> {props.para}</p>
    </div>
    </Link>
  )
}

export default ServiceCard
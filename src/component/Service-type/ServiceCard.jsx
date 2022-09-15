import React from 'react'

function ServiceCard(props) {
  return (
    <div className=' service-type border-2 border-none bg-gray-50  shadow-md p-2 inline-block rounded-lg m-2 overflow-hidden '>
        <img src={props.image} alt="img" className='w-72 rounded-lg pb-2 hover:scale-110 ' />
        <h2 className='text-xl font-medium text-gray-700 px-2 '>{props.title}</h2>
        <p className='text-md font-normal text-gray-600 px-2 py-1'> {props.para}</p>
    </div>
  )
}

export default ServiceCard
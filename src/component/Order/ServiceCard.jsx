import React from 'react'

function ServiceCard(props) {
  return (
    <div>
        <div className='sm:flex'>
            <div className='hidden sm:border sm:rounded-full sm:bg-yellow-200 sm:p-3'>
            <img src={props.src} alt="service-logo" className='md:w-4 lg:w-8 w-4 self-center' />
            </div>
            <h1 className='md:text-lg text-md lg:text-2xl self-center px-2  text-gray-500 '>{props.title}</h1>
        </div>
    </div>
  )
}

export default ServiceCard
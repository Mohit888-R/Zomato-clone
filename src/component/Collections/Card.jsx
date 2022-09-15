import React from 'react'
import {BsFillCaretRightFill} from "react-icons/bs";

function Card(props) {
  return (
    <div className='inline-block'>
        <a href={props.route}>
        <img src={props.image} alt="collection-img" className='z-2 w-72 rounded-md' />
        <div className='z-50 -mt-14 pl-5 text-white '>
        <h2 className='z-50 font-semibold text-lg'>{props.title}</h2>
        <p className='z-50 flex font-medium text-md'>{props.number} Places <BsFillCaretRightFill className='self-center ml-2'/></p>
        </div>
        </a>    
    </div>
  )
}

export default Card
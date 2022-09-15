import React from 'react'
import { useState } from 'react'
import {BsChevronDown} from "react-icons/bs";
import {data} from "./Faqs";

function Card(props) {
    const [show, setShow] = useState(false);
  return (
    <div>
        <div className='border  rounded-xl p-3 px-5 md:mb-5 mt-2'>
            <div onClick={()=>setShow(!show)} className="flex">
            <p  className="md:text-xl text-md   md:font-medium font-bold text-gray-800 flex flex-1 cursor-default">{props.question} </p>
            {
                    show? <BsChevronDown className='self-center rotate-180 transition duration-300 ease-in-out '/>:<BsChevronDown className='self-center  transition duration-300 ease-in-out'/>
            }
            </div>
            {
                show? <div><hr className='mt-2 pb-2'/><p className='text-gray-600'><a href={props.href} className="md:text-md font-medium text-slate-600"> {props.answer} </a></p></div>:null
            }
            
        </div>
    </div>
  )
}

export default Card

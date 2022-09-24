import React from 'react'
import {AiOutlineStar} from "react-icons/ai";
import {BiRupee} from "react-icons/bi"

function NightlifeCard(props) {
  return (
    <div>
        <div className='my-5'>
            <div className='w-80  m-auto  justify-center p-2 border border-white drop-shadow hover:border hover:border-gray-100 hover:shadow-2xl rounded-lg  transform duration-200 ease-in-out relative '>
                <div>
                    {/* product image */}
                    <img src={props.img} alt="product-img" className='w-80 h-60 overflow-hidden z-5 object-contain rounded-lg '/>   
                    {/* delivery time */}
                    <div className='flex z-10 -my-10 mx-1 relative justify-end px-2'>
                        <div className='bg-gray-200 text-black text-xs p-1 self-center rounded-sm'>{props.deliverytime}</div>
                    </div>
                </div>
                <div className='mt-16 pb-5'>
                    <div className='flex justify-between px-1 self-center'>
                    <div className='font-semibold text-lg truncate w-9/12' title={props.restaurant}>{props.restaurant}</div>
                    <div className='flex bg-green-700 text-white bold px-1 rounded self-center'><span className='text-sm self-center'> {props.rating}</span> <span className='self-center'> <AiOutlineStar/></span></div>
                    </div>
                    <div className='flex px-1'>
                        <div className='text-gray-500 text-sm flex-1 w-8/12  self-center truncate'>{props.tag}</div>
                        <div className='text-gray-500 flex'>   <span className='self-center'><BiRupee/></span><span>{props.money}</span> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NightlifeCard
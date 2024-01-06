import React from 'react'
import {AiOutlineStar} from "react-icons/ai";
import {BiRupee} from "react-icons/bi"
import {GiProgression} from "react-icons/gi";

function DeliveryCard(props) {
  return (
    <div>
        <div className='my-5'>
            <div className='w-80 m-auto  justify-center p-2 hover:border hover:border-gray-100 hover:shadow-2xl rounded-lg  transform duration-200 ease-in-out relative '>
                <div>
                    <img src={props.img} alt="product-img" className='w-80 z-5 object-contain rounded-lg '/>
                    <div className='flex z-10 -my-10 mx-1 relative justify-between px-2'>
                        <div className='bg-blue-600 p-1 text-sm text-white self-center rounded-sm '>{props.discount}</div>
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
                        <div className='text-gray-500 flex'>   <span className='self-center'><BiRupee/></span><span>{props.ruppee}</span> </div>
                    </div>
                </div>
                <hr />
                <div className='py-2 text-xs font-bold text-gray-700 flex '><span className='px-1 self-center' ><GiProgression/></span>  {props.orders}</div>
            </div>
        </div>
    </div>
  )
}

export default DeliveryCard;
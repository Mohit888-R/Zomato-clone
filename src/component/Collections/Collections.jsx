import React from 'react'
import Card from "./Card";
import {BsFillCaretRightFill} from "react-icons/bs";

function Collections() {
  return (
    <div className='md:w-10/12 md:justify-center md:m-auto md:px-0 py-5 px-10'>
        <h1 className='md:text-4xl text-bold pt-4 text-2xl'>Collections</h1>
        <div className='md:flex md:pb-8 md:pt-2 pt-2 pb-4'>
        <p className='md:text-lg md:font-thin md:flex-1 text-md'>Explore curated lists of top restaurants, cafes, pubs, and bars in Jaipur, based on trends </p>
        <a href="#" className='md:flex md:font-normal md:text-red-400 md:item-center md:m-auto hidden' >All collection in Jaipur <BsFillCaretRightFill className='self-center ml-2'/></a>
        </div>
        <div className='md:flex md:gap-6 md:justify-start sm:grid sm:grid-cols-2 sm:gap-6  justify-center m-auto grid gap-6'>
        <Card route={'#'} image={"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} title={'Best of Jaipur'} number={32}/>
        <Card route={'#'} image={"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} title={'Best of Jaipur'} number={32}/>
        <Card route={'#'} image={"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} title={'Best of Jaipur'} number={32}/>
        <Card route={'#'} image={"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} title={'Best of Jaipur'} number={32}/>    
        </div>
        <a href="#" className='flex font-normal text-red-400 item-center m-auto md:hidden py-5' >All collection in Jaipur <BsFillCaretRightFill className='self-center ml-2'/></a>
    </div>
  )
}

export default Collections;
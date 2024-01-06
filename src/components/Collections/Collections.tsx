import React from 'react'
import Card from "./Card";
import {BsFillCaretRightFill} from "react-icons/bs";
import Link from 'next/link';

function Collections() {
  return (
    <div className='md:w-10/12 md:justify-center md:m-auto md:px-0 py-5 px-10'>
        <h1 className='md:text-4xl text-bold pt-4 text-2xl'>Collections</h1>
        <div className='md:flex md:pb-8 md:pt-2 pt-2 pb-4'>
        <p className='md:text-lg md:font-thin md:flex-1 text-md'>Explore curated lists of top restaurants, cafes, pubs, and bars in Jaipur, based on trends </p>
        <Link href="/order/nightlife" className='md:flex md:font-normal md:text-red-400 md:item-center md:m-auto hidden' >All collection in Jaipur <BsFillCaretRightFill className='self-center ml-2'/></Link>
        </div>
        <div className='md:flex md:gap-6 md:justify-start sm:grid sm:grid-cols-2 sm:gap-6  justify-center m-auto grid gap-6'>
        <Card route={'/order/nightlife'} image={"https://cdn1.tripoto.com/media/filter/tst/img/567364/Image/1546271265_hawa_mahal.jpg"} title={'Best of Jaipur'} number={32}/>  
        <Card route={'/order/nightlife'} image={"https://miro.medium.com/max/1024/1*3Jjf2AI1e8J6G5YtqgFpZg.jpeg"} title={'Trending This Week'} number={30}/>
        <Card route={'/order/nightlife'} image={"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_864/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/b1eqimais11lblpywpmc/JaipurinstagramTour.webp"} title={'Insta-Worthy'} number={25}/>
        <Card route={'/order/nightlife'} image={"https://static.toiimg.com/photo/msid-24131936,width-96,height-65.cms"} title={'Beer in a Bar'} number={30}/>
          
        </div>
        <Link href="/order/nightlife" className='flex font-normal text-red-400 item-center m-auto md:hidden py-5' >All collection in Jaipur <BsFillCaretRightFill className='self-center ml-2'/></Link>
    </div>
  )
}

export default Collections;
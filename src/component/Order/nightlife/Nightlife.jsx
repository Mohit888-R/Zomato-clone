import React from 'react'
import Card from "./NightlifeCard";
import Data from "../../../assets/dining";

function Nightlife() {
  return (
    <div>
      <div className='md:w-10/12   m-auto justify-center py-10'>
    <div className='w-11/12 m-auto justify-center pb-5'>
      <h1 className='text-3xl '>Delivery Restaurants in Jaipur</h1>
    </div>
  <div className='grid lg:grid-cols-3 md:grid-cols-2 '>
    {
      Data.map((datas,i)=>
      <Card key={i} img={datas.url_img}  deliverytime={datas.distance} restaurant={datas.place} rating={datas.rating} tag={datas.tag} money={datas.money} orders={datas.orders} />
      )
    }
    </div>
  </div>
    </div>
  )
}

export default Nightlife
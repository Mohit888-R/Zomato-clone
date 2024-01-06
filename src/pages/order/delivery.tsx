import React from 'react';
import Card from "@/components/Order/DeliveryCard";
import Data from "@/utils/delivery";
 
function Delivery() {
  return (
    <div className='md:w-10/12   m-auto justify-center py-10'>
      <div className='w-11/12 md:m-auto md:justify-center md:text-start text-center pb-5'>
        <h1 className='md:text-3xl text-2xl  '>Delivery Restaurants in Jaipur</h1>
      </div>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 '>
      {
        Data.map((datas,i)=>
        <Card key={i} img={datas.ImgSrc_Col13_1} discount={datas['discount-1']} deliverytime={datas.deliverytime} restaurant={datas.restaurant} rating={datas.rating} tag={datas.tag} ruppee={datas.ruppee} orders={datas.orders} />
        )
      }
      </div>
    </div>
  )
}

export default Delivery
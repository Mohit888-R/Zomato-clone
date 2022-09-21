import React from 'react'
import Card from "./ServiceCard";

const data = [
    {
        id:1,
        image : "https://www.posist.com/restaurant-times/wp-content/uploads/2016/12/restaurant-delivery-orders-1024x683.jpg",
        title : "Order Online",
        para : "Stay home and order to your doorstep"
    },
    {
        id:2,
        image : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title:"Dining",
        para : "View the city's favourite dining venues"
    },
    {
        id:3,
        image : "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2x1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title:"Nightlife and Clubs",
        para : "Explore the city's top nightlife outlets"
    }

]

function Service() {
  return (
    <div className='sm:gap-6 md:flex m-auto justify-center px-10 '>
        {/* <Card image="" title="" para=""/> */}
        {
            data.map((list)=>
                <Card key={list.id} image={list.image} title={list.title} para={list.para} />
            )
        }
    </div>
  )
}

export default Service
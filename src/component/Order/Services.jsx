import React,{useState} from 'react';
import Card from "./ServiceCard";
import {Link}from "react-router-dom";

const data = [
    {
        router:'delivery',
        src:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
        title:"Delivery"

    },{
        router:'dining',
        src:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
        title:"Dining Out"
    },
    {
        router:'nightlife',
        src:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp",
        title:"Night Life"
    }
]

function Services() {
    const [active,setactive] = useState(0);
  return (
    <>
    <div className='lg:m-auto lg:justify-center lg:w-10/12  px-10 pt-10 pb-2 '>
        <div className='flex  sm:gap-10'>
       {
            data.map((datas,index)=>
            <Link key={index}  exact to={datas.router}  onClick={()=>setactive(index)}  className={`${ active ===index ? "border-b-2 lg:border-b-4 sm:pb-3 -mb-2 border-red-500 sm:p-2 rounded-sm transform duration-200 ease-in-out ":"sm:p-2"}`}>
                <Card src={datas.src} title={datas.title} />
            </Link>
             )
       }
    </div>
    </div>
    </>
  )
}

export default Services
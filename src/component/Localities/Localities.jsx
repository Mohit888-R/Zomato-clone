import React from 'react'
import Card from "./Card";
// import Data from  "../../assets/LocalitiesData";

// all data of cards 
const Data = [
  {
      id : "1",
      locality : "C Scheme",
      places : 352,
      href:'/'

  },
  {
      id : "2",
      locality :  "Malviya Nagar"   ,
      places : 1095 ,
      href:'/'

  },
  {
      id : "3",
      locality :    "Tonk Road" ,
      places :  340,
      href:'/'

  },
  {
      id : "4",
      locality :  "Vaishali Nagar"   ,
      places :  1200,
      href:'/'

  },
  {
      id : "5",
      locality :    "MI Road" ,
      places :  148,
      href:'/'

  },
  {
      id : "6",
      locality : "Mansarovar"    ,
      places :  1462,
      href:'/'

  },
  {
      id : "7",
      locality :  "Raja Park"   ,
      places :  469,
      href:'/'

  },
  {
      id : "8",
      locality :  "Bani Park"   ,
      places :  143,
      href:'/'

  },
  {
      id : "9",
      locality :  "Bais Godam"   ,
      places :  141,
      href:'/'

  },
  {
      id : "10",
      locality :  "Adarsh Nagar"   ,
      places :  158,
      href:'/'

  },{
      id : "11",
      locality :  "Ajmer Highway " ,
      places :  173,
      href:'/'

  },{
      id : "12",
      locality :   "Lal Kothi"  ,
      places :  122,
      href:'/'

  },{
      id : "13",
      locality :   "Gopalbari"  ,
      places :  68,
      href:'/'

  },{
      id : "14",
      locality :  "Sodala"   ,
      places :  383,
      href:'/'

  },{
      id : "15",
      locality :   "Shyam Nagar"  ,
      places :  355,
      href:'/'

  },{
      id : "16",
      locality :  "Sindhi Camp"   ,
      places :  119,
      href:'/'

  },{
      id : "17",
      locality :   "Pink City"  ,
      places :  278,
      href:'/'

  },{
      id : "18",
      locality :   "Amer"  ,
      places :  35,
      href:'/'

  },{
      id : "19",
      locality : "Civil Lines"    ,
      places :  75,
      href:'/'

  },{
      id : "20",
      locality :  "Chitrakoot" ,
      places :  350,
      href:'/'

  },{
      id : "21",
      locality : "Narayan Singh Circle Restaurants"    ,
      places : 23 ,
      href:'/'

  },{
      id : "22",
      locality : "Sikar Road"    ,
      places :  363,
      href:'/'

  },{
      id : "23",
      locality :   "Vidhyadhar Nagar Restaurants"  ,
      places :  384,
      href:'/'

  },{
      id : "24",
      locality :   "Bapu Nagar"  ,
      places :  112,
      href:'/'

  },{
      id : "25",
      locality :   "Amer Road"  ,
      places :  145,
      href:'/'

  },{
      id : "26",
      locality :  "Jhotwara"   ,
      places :  1326,
      href:'/'

  },
  {
      id : "27",
      locality :    "Sharstri Nagar" ,
      places :  228,
      href:'/'

  },
  {
      id : "28",
      locality :   "Kukas"  ,
      places :  48,
      href:'/'

  },
  {
      id : "29",
      locality :  "jawahar Nagar"   ,
      places :  107,
      href:'/'
  }
]



function Localities() {
  return (
    <div className='md:py-28 md:w-10/12 justify-center m-auto md:px-0 px-10'>
        <p className='md:text-4xl text-3xl md:pb-10 pb-0 font-light text-gray-700'>Popular localities in and around <b>Jaipur</b></p>
        <div className='md:grid md:gap-6 md:grid-cols-3 '>
        {
            Data.map((data)=>
                <Card key={data.id} href={data.href} locality={data.locality} places={data.places} /> 
            )
        }
        </div>
    </div>
  )
}

export default Localities
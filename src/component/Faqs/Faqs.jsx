import React from 'react'
import Card from "./Card";

const data = [
    {
        question : "Popular cuisines near me",
        ans : "Desserts food near me . Bakery food near me . Beverages food near me . Biryani food near me . Burger food near me . Chinese food near me . Continental food near me ",
        href : "/"
    },
    {
        question :"Popular restaurant types near me",
        ans : "Bakery near me . Bars near me . Beverage Shops near me . Bhojanalya near me . Cafés near me .Casual Dining near me . Clubs near me . Dessert Parlors near me . Dhabas near me . Paan Shop near me",
        href : "/"
    },
    {
        question : "Top Restaurant Chains",
        ans :"Bikarnervala      Biryani Blues       Burger King         Burger Singh            Dunkin' Donuts",
        href : "/"
    }
]


function Faqs() {
  return (
    <div className='my-5 pb-20'>
    <div className=' md:w-10/12 m-auto justify-center md:px-0 px-10 '>
        <p className='md:text-3xl sm:text-2xl text-xl md:py-5 pt-5 md:font-light font-semibold'>Explore options near me</p>
        <div>
            {
                data.map((link,i)=> 
                    <Card key={link.i} question={link.question} href={link.href} answer={link.ans}/>                
                )
            }
        {/* <Card /> */}
        </div>
    </div>
    </div>
  )
}

export default Faqs

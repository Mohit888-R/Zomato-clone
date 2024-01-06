import React from 'react'
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter,FaYoutube} from 'react-icons/fa';

const datas = [
    {
        title : "About Zomato",
        lists : [
            {
                link:"Who we are",
                href :"/"
            },
            {
                link : "Blog",
                href :"/"
            },
            {
                link : "Work with us",
                href :"/"
            },
            {
                link : "Investor Relations",
                href :"/"
            },
            {
                link : "Report Fraud",
                href :"/"
            },
            {
                link:"Contact Us",
                href :"/"
            }
        ]
    },
    {
        title : "Zomaverse",
        lists : [
            {
                link : "Zomato",
                href: "/"
            },
            {
                link : "Feeding India",
                href: "/"
            },
            {
                link : "Hyperpure",
                href: "/"
            },
            {
                link : "Zomaland",
                href: "/"
            }
        ]
    },
    {
        title : "For Restaurants",
        lists :[
            {
                link : "Partner with us",
                href: "/"
            },
            {
                link : "App For You",
                href: "/"
            },
        ]
    },
    {
        title : "Learn More",
        lists : [
            {
                link :"Privacy",
                href:'/'
            },
            {
                link : "Security",
                href: "/"
            },
            {
                link : "Term",
                href: "/"
            },
            {
                link : "Sitemap",
                href: "/"
            },
        ]
    }
]

function Footer() {
  return (
    <div className='bg-gray-100 w-full py-2'>
        <div className='w-10/12 justify-center m-auto'>
        {/* // first raw of footer  */}
        <div className='flex '>
        <a href="/" className='flex md:flex-1 pr-5'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato-logo"  className='w-40'/></a>
            <ul className='list-none flex self-center text-xl gap-4'>
                <li><FaLinkedinIn/></li>
                <li><FaInstagram/></li>
                <li><FaTwitter/></li>
                <li><FaYoutube/></li>
                <li><FaFacebookF/></li>
            </ul>
      </div>

      {/* // 2nd raw of footer  */}
      <div className='py-10'>
           
            <div className='md:flex md:justify-between grid grid-cols-2'>
                {
                    datas.map((data)=>{
                        return (
                            <div>
                            <h1 className='text-xl font-medium text-black py-1'>{data.title}</h1>
                            <ul className='text-gray-700'>
                                {data.lists.map((list)=>
                                <a href={list.href}> <li  className="py-1">{list.link}</li></a>
                                )}
                            </ul>
                            </div>
                        )
                    }                        
                    )
                }
            </div>
      </div>    

      {/* //3rd raw of footer */}
      <div className='text-center py-2'>
            Copyright &copy; 2022 ❤ Mohit Singh 
      </div>
      </div>
    </div>
  )
}

export default Footer

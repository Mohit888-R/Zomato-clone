import React from 'react'
import HeaderMain from '@/components/HeaderMain';
import Service from "@/components/Service-type/Service";
import Collections from "@/components/Collections/Collections";
import Localities  from '@/components/Localities/Localities';
import Faqs from '@/components/Faqs/Faqs';
import Footer from "@/components/Footer/Footer";


function Home() {
  return (
    <div>
        <HeaderMain/>
        <Service/>
      <Collections/>
      <Localities/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default Home
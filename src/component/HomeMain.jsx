import React from 'react'
import HeaderMain from './HeaderMain';
import Service from "./Service-type/Service";
import Collections from "./Collections/Collections";
import Localities  from './Localities/Localities';
import Faqs from './Faqs/Faqs';
import Footer from "./Footer/Footer";


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
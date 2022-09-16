import React from 'react'
import Header from './Header/Header';
import Service from "./Service-type/Service";
import Collections from "./Collections/Collections";
import Localities  from './Localities/Localities';
import Faqs from './Faqs/Faqs';
import Footer from "./Footer/Footer";


function Home() {
  return (
    <div>
        <Header/>
        <Service/>
      <Collections/>
      <Localities/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default Home
import React from 'react'
import Header from '../components/Header/Header';
import Service from "../components/Service-type/Service";
import Collections from "../components/Collections/Collections";
import Localities  from '../components/Localities/Localities';
import Faqs from '../components/Faqs/Faqs';
import Footer from "../components/Footer/Footer";


function Index() {
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

export default Index
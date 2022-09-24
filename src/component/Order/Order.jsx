import React from 'react';
import OrderHeader from "./Header";
import ServiceOrder from "./Services";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom";

function Order() {
  return (
    <div>
        <div className='border-b-2'>
          <OrderHeader/>
          <ServiceOrder/>
        </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}



export default Order
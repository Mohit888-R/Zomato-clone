import React from 'react';

import Header from '@/components/Order/Header';
import Services from '@/components/Order/Services';
import Footer from '@/components/Footer/Footer';

function Order() {
  return (
    <div>
        <div className='border-b-2'>
          <Header/>
          <Services/>
        </div>
      <Footer/>
    </div>
  )
}



export default Order
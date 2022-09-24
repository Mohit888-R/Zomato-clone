import './App.css';
import Header from './component/Header/Header';
import Service from "./component/Service-type/Service";
import Collections from "./component/Collections/Collections";
import Localities  from './component/Localities/Localities';
import Faqs from './component/Faqs/Faqs';
import Footer from "./component/Footer/Footer";
import Register from './component/Account/Register';
import Login from "./component/Account/Login";
import Home from "./component/Home";
import Order from './component/Order/Order';
import Places from './component/Places';
import HomeMain from "./component/HomeMain";
import Delivery from './component/Order/Delivery/Delivery';
import Dining from './component/Order/Dining/Dining';
import Nightlife from './component/Order/nightlife/Nightlife';

import {BrowserRouter,Route,Routes} from "react-router-dom";
import {UserAuthContextProvider} from "./context/AuthContext";
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      
      <BrowserRouter>
        {/* <Register/>
       <Login/> */}
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='login' element={<Login/>}/> 
        <Route path='register' element={<Register/>}/> 
        <Route path='order/' element={<Order/>}>
          <Route path="delivery" element={<Delivery/>}/>
          <Route path="dining" element={<Dining/>}/>
          <Route path="nightlife" element={<Nightlife/>}/>
        </Route> 
        <Route path='places' element={<Places/>}/> 
        <Route path='home' element={<HomeMain/>}/>
        
      </Routes>

    
    </BrowserRouter>
    </UserAuthContextProvider>
    </div>
  );
}

export default App;

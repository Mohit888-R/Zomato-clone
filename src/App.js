import './App.css';
import Header from './component/Header/Header';
import Service from "./component/Service-type/Service";
import Collections from "./component/Collections/Collections";
import Localities  from './component/Localities/Localities';
import Faqs from './component/Faqs/Faqs';
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Service/>
      <Collections/>
      <Localities/>
      <Faqs/>
    <Footer/>
    </div>
  );
}

export default App;

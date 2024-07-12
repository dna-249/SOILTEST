import { Routes, Route } from "react-router-dom";
import { Records } from "./component.js/Records";
import { Payment } from "./component.js/payments";
import { Navbar } from "./component.js/navbar";
import { Home } from "./component.js/home";
import { Overview } from "./component.js/overviews";
import { Product } from "./component.js/product";

function App(){
  return(
    <>
    <div className="co">
    <div className="nuu">
    <Navbar/>
    </div>
    <div className="nuu2">
    <Routes >
       <Route path="/" element={<Home/>}/>
      <Route path="/payments" element={<Payment/>} />
      <Route path="/Records" element={<Records/>} />
      <Route path="/overviews" element={<Overview/>}/>
      <Route path="/product" element={<Product/>}/>
      </Routes>
      </div>
     </div>
     
      <div className="nuu3"></div>
    </> 
  )
}
export default App;
import { useNavigate } from "react-router-dom"
import { Home } from "./home";

export const Records = () => {
const nur = useNavigate();
    return(
        <>
        <div>
        <h1>Records on the basis of sales the products:</h1>
        <h5>Street/District:</h5>
          <input type="password" name="Middle name" placeholder="Street/District"  id="user"/>
          </div>       
        <h3>
            <ul>
            <li>Estates </li>
            <li>Phones  </li>
            <li>Furnitures</li>
            <li> Cements</li>
            <li>Infrastructure </li>
            <li onClick={()=>nur('/Home')}>Gold World</li>
            
            </ul>
        </h3>
  </>
    )
}
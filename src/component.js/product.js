import { useNavigate } from "react-router-dom"

export const Product = () => {
    const navigate = useNavigate();
    return(
    <>
  <div> 
        <h1> Products in the Market </h1>
    <ul>
        <li> Books</li>
        <li> Accessories </li>
        <li> templates </li>
    </ul>
 </div>
 <button onClick={() => navigate('/home')}> Back </button>
   </> 
    )  
}
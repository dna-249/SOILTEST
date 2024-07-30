
import {useState} from "react";
export const Project = () =>{
    const [text, setText] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const [text5, setText5] = useState("");
    const [newText, setNewText] = useState([]);
    function handleNewText(){
        const newtask = document.getElementById("newtask1").style.display = "block";
        
         const updatedTask = {
            text:text,
            text1:text1,
            text2:text2,
            text3:text3,
            text4:text4,
            text5:text5,
         }
        setNewText(newText =>[updatedTask]);

    setText("")
    setText1("")
    setText2("")
    setText3("")
    setText4("")
    setText5("")
    }
    function confirmOrder(){
        document.getElementById("newtask1").style.display="none";
        alert("congratulations your order is ready!")
    }
  function handleText(event){
    setText(event.target.value);
  }
  function handleText1(event){
    setText1(event.target.value);
  }
  function handleText2(event){
    setText2(event.target.value);
  }
  function handleText3(event){
    setText3(event.target.value);
  }
  function handleText4(event){
    setText4(event.target.value);
  }
  function handleText5(event){
    setText5(event.target.value);
  }
    return(
        <div  id="project"  className="project-cont"><h3 style={{padding:"10px", color:"brown", 
            border:"none",backgroundColor:"lightgrey",
            borderRadius:"10px", width:"fit-content", fontSize:"20px"
        }}>Place Order and Get Your Ticket</h3>
          <p> Fullname:  <input onChange={handleText}  value={text} type="text" placeholder="fullname"  /> <br/>
            Location: <input   onChange={handleText1}  value={text1} type="text"  placeholder="location" /> <br/>
            Tel:<input onChange={handleText2}  value={text2} type="number"  placeholder="Phone Number" /></p> <br/>
            <p> Payment Method: 
            <select onChange={handleText3} value={text3}>
                <option > </option>
                <option> visa</option>
                <option> mastercard</option>
                <option> gifted card</option>
            </select>
            </p>
            <br/>
            <p> Delivery :<br/> 
                <label><input  onChange={handleText4} value="pick up" checked={text4 ==="pick up"}  type="radio"/> pick-up</label><br/>
                <label><input   onChange={handleText5} value="delivery" checked={text5 ==="delivery"} type="radio"/> Delivery </label>
                </p>
            <div>
                <button  style={{marginLeft:"20%"}}  className="project-h" onClick={handleNewText}>confirm</button>
            <div id="newtask1"  className="newtask"> 
               {newText.map((newText, index)=>
                <ul key={index}>
                <span> Surname:   {newText.text} </span><br/> 
                <span>Lastname: {newText.text1}</span><br/>
                 <span>Tel:{newText.text2}</span><br/>
                 <span> Payment-type: {newText.text3}</span><br/>
                 <span> collection:{newText.text4}</span><br/><span>{newText.text5}</span>
                    </ul>)}
                    <h3 onClick={confirmOrder}  className="project-h"> Print Ticket</h3>
                    </div></div>
        </div>
    )
}
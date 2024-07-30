
import {useState} from "react";
export const Calculator =()=>{
    const [value, setValue]= useState([]);
    
    function inputValue(e){
       setValue(value +e.target.innerHTML); 
    }

    function cal(){
        setValue("");
    }
    function equal(){ 
        try{
        setValue(eval(value))
    }catch(error){
           setValue("")
       }
    }
    function del(){
        setValue(value.toString().slice(0,-1))
    }
    return(

     <> 
     <div  id="call" className="calculator"><h1 className="project-h" style={{fontSize:"50px", marginBottom:"30px"}}> Simple React Calculator</h1>
        <div  className="container"> CAL-DNA
            <input id="display" placeholder="0" value={value} readOnly/>
         
         <div className="button">
            <button onClick={del}>DEL </button>
            <button onClick={inputValue}> AC </button>
            <button onClick={cal}>start </button>
            <button onClick={equal}> =</button>
            <button onClick={inputValue}> 9</button>
            <button onClick={inputValue}> 8</button>
            <button onClick={inputValue}> 7</button>
            <button onClick={inputValue}> +</button>
            <button onClick={inputValue}> 4</button>
            <button onClick={inputValue}> 5</button>
            <button onClick={inputValue}> 6</button>
            <button onClick={inputValue}> -</button>
            <button onClick={inputValue}> 1</button>
            <button onClick={inputValue}>2 </button>
            <button onClick={inputValue}> 3</button>
            <button onClick={inputValue}> /</button>
            <button onClick={inputValue}> 00</button>
            <button onClick={inputValue}> 0</button>
            <button onClick={inputValue}> .</button>
            <button onClick={inputValue}>* </button>
            
         </div>
         </div>
         </div>
    </>
    )
  
}
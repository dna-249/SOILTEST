import React,{useState} from "react";
export const MyCv =()=>{
 const [change, setChange]= useState();


  function nur(){
    const nur = document.getElementById("nur");
    nur.style.backgroundColor="hsl(31, 37%, 100%)";
  };
 function changeColor(event){
    setChange(event.target.value);
 }
    return(
        < >
        <div>
            <input type="color" onChange={changeColor}/>
        </div>
        <div onClick={nur} className="Cv" id="nur">
            <div className="myCv"style= {{backgroundColor:change}}>{change}</div>
            <div className="cv-text">
            <h4 className="myCv-title"> Danamo Nura Alhaji</h4>
            <p className="myCv-email"> Email: danamonuraalhaji@gmail.com</p>
            <p className="myCv-address">Address: Kafe-District, life-Camp Abuja</p>
            <p className="myCv-contact"> Contact: 08085943776,07037638761</p>
        </div>
        </div>
        </>
    )
}
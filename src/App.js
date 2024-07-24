import React from "react"
import { MyCv } from "./component.jsx/my-cv";
import {Header} from "./component.jsx/header.jsx";

function App(){
  return(
    <>
    <div style={{marginTop:"50px"}}>
      <Header/>
     <MyCv/>
    </div>
    </> 
  )
}
export default App;
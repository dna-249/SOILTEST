import React from "react"
import { MyCv } from "./component.jsx/my-cv";
import {Header} from "./component.jsx/header.jsx";
import { Main } from "./component.jsx/main.jsx";
import { Project } from "./component.jsx/project.jsx";
import { Calculator } from "./component.jsx/mycalculator.jsx";


function App(){
  return(
    <>
    <div>
      <Header/>
     <MyCv />
     <Main />
     <Project/>
     <Calculator/>
     
    </div>
    </> 
  )
}
export default App;
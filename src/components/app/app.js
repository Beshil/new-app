import { Component } from "react";
import { AppInfo } from "../app-info/app.info";
import './app.css'
export class App extends Component{
 render(){
   return(
     <div className="app">
       <AppInfo />
     </div>
   )
 }
}
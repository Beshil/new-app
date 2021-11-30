import { Component } from "react";
import { AppInfo } from "../app-info/app.info";
import { SearchPanel } from "../search-panel/search.panel";
import './app.css'
export class App extends Component{
 render(){
   return(
     <div className="app">
       <AppInfo />
       <div className="search-panel">
           <SearchPanel />
       </div>
     
     </div>
   )
 }
}
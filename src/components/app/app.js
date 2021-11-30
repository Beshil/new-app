import { Component } from "react";
import { AppInfo } from "../app-info/app.info";
import { SearchPanel } from "../search-panel/search.panel";
import './app.css'
import { FilterComponent } from './../filter/filter.component';
export class App extends Component{
 render(){
   return(
     <div className="app">
       <AppInfo />
       <div className="search-panel">
           <SearchPanel />
           <FilterComponent/>
       </div>
     
     </div>
   )
 }
}
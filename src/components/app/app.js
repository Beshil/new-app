import { Component } from "react";
import { AppInfo } from "../app-info/app.info"; 
import { EmployersAddForm } from "../employers-add-form/employers-add-form";
import { EmployersList } from "../employers-list/employers-list";
import { SearchPanel } from "../search-panel/search.panel";
import { FilterComponent } from './../filter/filter.component';




import './app.css'


export class App extends Component{
 render(){
   return(
     <div className="app">
       <AppInfo />
       <div className="search-panel">
           <SearchPanel />
           <FilterComponent/>
       </div>
       <EmployersList/>
       <EmployersAddForm/>
     </div>
   )
 }
}
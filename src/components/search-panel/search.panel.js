import { Component } from "react";
import './search.panel.css'
export class SearchPanel extends Component{
  render(){
    return ( 
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
      />
    )
   
  }
}
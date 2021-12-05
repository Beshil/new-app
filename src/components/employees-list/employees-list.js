import { Component } from "react";
import { EmployeesListItem } from "../employees-list-item/employees-list-item";

import './employees-list.css';

export class EmployeesList extends Component {
   
    render(){
        const {data, onDelete, onToggleProp} = this.props
        const elements = data.map(item =>{ 
            const { id, ...itemList} = item
            return  <EmployeesListItem key={id} {...itemList}
            onDelete={()=>onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        })
        return (
            <ul className="app-list list-group">
               {elements}
            </ul>
        )   
    }
}
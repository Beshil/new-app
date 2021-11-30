import { Component } from "react";
import {EmployersListItem} from "../employers-list-item/employers-list-item";

import './employers-list.css';

export class EmployersList extends Component {
    render(){
        return (
            <ul className="app-list list-group">
                <EmployersListItem/>
                <EmployersListItem/>
                <EmployersListItem/>
            </ul>
        )   
    }
}
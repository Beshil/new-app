import { Component } from "react";
import './app.info.css'
export class AppInfo extends Component{
  render(){
    return(
      <div className="app-info">
        <h1>Учет сотрудников в компании</h1>
        <h2>Общее число сотрудников: </h2>
        <h2>Премию получат: </h2>
      </div>
    )
  }
}
import { Component } from "react";
import './app.info.css'
export class AppInfo extends Component{
  render(){
    const {increased, employees}= this.props
    return(
      <div className="app-info">
        <h1>Учет сотрудников в компании</h1>
        <h2>Общее число сотрудников: {employees}</h2>
        <h2>Премию получат: {increased}</h2>
      </div>
    )
  }
}
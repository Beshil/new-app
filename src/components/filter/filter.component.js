import { Component } from "react";
import './filter.css'
export class FilterComponent extends Component{
  render(){
    return(
      <div className="btn-group">
        <button
          className="btn btn-light"
          type="button">
            Все сотрудники
        </button>
        <button
          className="btn btn-outline-light"
          type="button">
            На повышение
        </button>
        <button
          className="btn btn-outline-light"
          type="button">
            З/П более 1000$
        </button>
      </div>
    )
  }
}
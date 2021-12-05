import {
  Component
} from "react";
import './filter.css'
export class FilterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonsData: [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
      ]
    }
  }

  render() {
    const buttons = this.state.buttonsData.map(({name, label}) => {
    const active = this.props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
        <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => this.props.onFilterSelect(name)}>
                {label}
        </button>
    )
})
    return ( 
      <div className = "btn-group" > 
      {buttons}
      </div>
    )
  }
}
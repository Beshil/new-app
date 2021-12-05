import { Component } from "react";
import { AppInfo } from "../app-info/app.info";  
import { SearchPanel } from "../search-panel/search.panel";
import { FilterComponent } from './../filter/filter.component';
import { EmployeesAddForm } from './../employees-add-form/employees-add-form';
import { EmployeesList } from './../employees-list/employees-list';


import './app.css'



export class App extends Component{  
  
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
            {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
            {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
        ],
        search: '',
        filter: 'all'
    }
}

deleteItem = (id) => {
    this.setState(({data}) => {
        return {
            data: data.filter(item => item.id !== id)
        }
    })
}

addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.state.data.length + 1
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item;
        })
    }))
}
onChangeSearch =(items, search) =>{
    if(search.length === 0) return items

    return items.filter(item =>{
        return item.name.indexOf(search) > -1
    })
}
updateSearch = (search) =>{
    this.setState({search})
}
filterPost = (items, filter) => {
    switch (filter) {
        case 'rise':
            return items.filter(item => item.rise);
        case 'moreThen1000':
            return items.filter(item => item.salary > 1000);
        default:
            return items
    }
}

onFilterSelect = (filter) => {
    this.setState({filter});
}

render() {
    const {data, search, filter} = this.state
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.onChangeSearch(data, search), filter);
    return (
        <div className="app">
            <AppInfo employees={employees} increased={increased}/>

            <div className="search-panel">
                <SearchPanel updateSearch={this.updateSearch}/>
                <FilterComponent filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>
            
            <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
            <EmployeesAddForm onAdd={this.addItem}/>
        </div>
    );
}
}
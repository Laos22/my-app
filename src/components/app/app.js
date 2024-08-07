import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: "Alex", salary: 1000, increase: false, rise: true, id: 1},
                {name: "Oleg", salary: 2000, increase: true, rise: false, id: 2},
                {name: "Olga", salary: 3000, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
    }
    maxId = 4;

    deleteItem = (id) => {
        this.setState((state) => {
            const data = state.data;
            return {data : data.filter(item => item.id !== id)}
        })
    }
    onToogleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
    addItem = (name, salary) => {
        if (name.length >= 3 && salary > 0) {
            const newItem = {
                name: name,
                salary: salary,
                increase: false,
                rise: false,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        }
    }
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => item.name.indexOf(term) > -1)
    }
    onUpdateSearch = (term) => {
        this.setState({term});

    }
    filterPost = (items, filter) => {

        switch (filter) {
            case 'rise': 
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter})

    }



    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo
                employees={employees}
                increased={increased} />
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter 
                    filter={filter}
                    onFilterSelect={this.onFilterSelect} />
                </div>
                    <EmployeesList
                     data={visibleData}
                     onDelete={this.deleteItem}
                     onCreate={this.setItem}
                     onToogleProp={this.onToogleProp} />
                    <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;
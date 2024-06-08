import './employees-list-item.css';
import {Component} from 'react';

class EmployeesListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => {
           return {increase: !increase}
        })
    }

    onLike = () => {
        this.setState(({like}) => {
            return {like: !like}
         })
    }

    render () {
        const {name, salary} = this.props;
        const {increase, like} = this.state;
        let className = "list-group-item d-flex justify-content-between";
        if (increase) className += ' increase';
        if (like) className += ' like';
        return (
            <li className={className}>
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className="d-flex justify-content-centr align-items-center">
                    <button className="btn-cookie"
                    onClick={this.onIncrease} 
                    type="button">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button className="btn-trash" type="button">
                        <i className="fas fa-trash"></i>
                    </button>

                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}


export default EmployeesListItem;
import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToogleProp, increase, rise} = props;
    let className = "list-group-item d-flex justify-content-between";
    if (increase) className += ' increase';
    if (rise) className += ' like';
    return (
        <li className={className}>
            <span className="list-group-item-label" onClick={onToogleProp} data-toogle="rise" >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className="d-flex justify-content-centr align-items-center">
                <button className="btn-cookie"
                onClick={onToogleProp} 
                type="button"
                data-toogle="increase" >
                    <i className="fas fa-cookie"></i>
                </button>

                <button 
                className="btn-trash" 
                type="button"
                onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}


export default EmployeesListItem;
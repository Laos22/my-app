import './employees-list-item.css';

function EmployeesListItem({name, salary, increase}) {
    let className = "list-group-item d-flex justify-content-between";
    if (increase) className += ' increase';
    return (
        <li className={className}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className="d-flex justify-content-centr align-items-center">
                <button className="btn-cookie" type="button">
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


export default EmployeesListItem;
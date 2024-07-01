import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';





function EmployeesList({data, onDelete, onToogleIncrease, onToogleRise}) {
    const employees = data.map(emploee => {
        const {id, ...employeeProps} = emploee;
        return <EmployeesListItem key={id} 
        {...employeeProps}
        onDelete={() => onDelete(id)}
        onToogleIncrease={() => onToogleIncrease(id)}
        onToogleRise={() => onToogleRise(id)} />
    })

    return (
        <ul className="app-list list-group">
        {employees}
        </ul>
    )
}

export default EmployeesList
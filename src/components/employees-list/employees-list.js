import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';





function EmployeesList({data, onDelete, onToogleProp}) {
    const employees = data.map(emploee => {
        const {id, ...employeeProps} = emploee;
        return <EmployeesListItem key={id} 
        {...employeeProps}
        onDelete={() => onDelete(id)}
        onToogleProp={(e) => onToogleProp(id, e.currentTarget.getAttribute('data-toogle'))} 
        />
    })

    return (
        <ul className="app-list list-group">
        {employees}
        </ul>
    )
}

export default EmployeesList
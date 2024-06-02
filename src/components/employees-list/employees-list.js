import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';





function EmployeesList({data}) {
    const employees = data.map(emploee => {
        const {id, ...employeeProps} = emploee;
        return <EmployeesListItem key={id} {...employeeProps}/>
    })

    return employees;
}

export default EmployeesList
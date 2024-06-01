import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';





function EmployeesList({data}) {
    const employees = data.map(emploee => {
        return <EmployeesListItem {...emploee}/>
    })

    return employees;
}

export default EmployeesList
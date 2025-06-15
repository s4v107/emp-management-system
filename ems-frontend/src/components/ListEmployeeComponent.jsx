import React, {useEffect, useState} from 'react'
import { listEmployees , deleteEmployee} from '../services/EmployeeService'
import { Link, useNavigate } from 'react-router-dom'
import EmployeeComponent from './EmployeeComponent';


const ListEmployeeComponent = () => {

  const[employees, setEmployees] = useState([])
  const navigator = useNavigate();

    useEffect(() => {
    getAllEmployees();
}, [])

    const getAllEmployees = () => {
        listEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

  function addNewEmployee() {
    navigator('/add-employee')
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`)
  }

  function  handleDeleteEmployee(id) {
    console.log(id);
    deleteEmployee(id).then((response) => {
        getAllEmployees();
    }).catch (error => {
        console.error(error)
    })
  }

  return (
    <div className="container">
            <h2 className = "text-center"> List Employees </h2>
            <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link>
            <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr key = {employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
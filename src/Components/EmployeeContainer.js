import React, { Component } from 'react';
import Table from "./Table"
import Title from "./Title"
import SearchForm from "./SearchForm"
import employees from "../employees.json"
import Employee from "./Employee"



class EmployeeContainer extends Component {

    state = {
        employees
    };

    render() {
        return (
            <div>
                <Title />
                <SearchForm />
                <Table>
                    {this.state.employees.filter(employee => employee.position === "Forward").map(employee => (
                        <Employee
                            name={employee.name}
                            email={employee.email}
                            position={employee.position}
                            role={employee.role}
                        />
                    ))}
                </Table>

            </div >
        )
    }
}

export default EmployeeContainer;
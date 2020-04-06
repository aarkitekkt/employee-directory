import React, { Component } from "react";
import Employee from "./Employee";
import employees from "../employees.json"

class Table extends Component {

    state = {
        employees
    }

    render() {
        return (
            <div>
                <table>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Role</th>
                    {this.state.employees.map(employee => (
                        <Employee
                            name={employee.name}
                            email={employee.email}
                            position={employee.position}
                            role={employee.role}
                        />
                    ))}
                </table>
            </div>
        )
    }
}

export default Table;
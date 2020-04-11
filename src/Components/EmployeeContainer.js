import React, { Component } from 'react';
import Table from "./Table"
import Title from "./Title"
import SearchForm from "./SearchForm"
import employeesList from "../employeesList.json"
import Employee from "./Employee"



class EmployeeContainer extends Component {

    state = {
        employees: employeesList,
        search: ""
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {

        event.preventDefault();
        var found = [];
        console.log("Searching for " + this.state.search);
        found = employeesList.filter(employee => employee.name === this.state.search);

        this.setState({ employees: found })
    };

    handleListReset = event => {
        this.setState({ employees: employeesList })
    }



    render() {
        return (
            <div>
                <Title />
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Table>
                    {this.state.employees[0] ? (
                        this.state.employees.map(employee => (
                            <Employee
                                id={employee.id}
                                name={employee.name}
                                email={employee.email}
                                position={employee.position}
                                role={employee.role}
                            />
                        ))) : (<h3>no employee found</h3>)
                    }
                </Table>

            </div >
        )
    }
}

export default EmployeeContainer;
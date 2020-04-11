import React, { Component } from 'react';
import Table from "./Table";
import Title from "./Title";
import SearchForm from "./SearchForm";
import Search from "./Search";
import employeesList from "../employeesList.json";
import Employee from "./Employee";
import Filter from './Filter';
import Sort from "./Sort"



class EmployeeContainer extends Component {

    state = {
        employees: employeesList,
        search: "",
        filter: "Forward",
        sort: "name"
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

        this.setState({
            employees: found,
            search: ""
        })
    };

    handleFilterSubmit = event => {

        event.preventDefault();
        var filtered = [];

        console.log("Filtering by " + this.state.filter);

        filtered = employeesList.filter(employee => employee.position === this.state.filter);

        console.log(filtered)

        this.setState({ employees: filtered })
    };

    handleSortSubmit = event => {

        event.preventDefault();
        var sortBy = this.state.sort;
        var EmpArray = this.state.employees;

        console.log("Sorting by " + sortBy);

        EmpArray.sort(function (a, b) { return a.name - b.name });


        console.log(sortBy);
        console.log(EmpArray);
        console.log(EmpArray[0].sortBy);


        // this.setState({ employees: sorted });
    };

    handleListReset = () => {
        this.setState({ employees: employeesList });
    }



    render() {
        return (
            <div className="container px-5">
                <Title />
                <SearchForm>
                    <Search
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <Filter
                        value={this.state.filter}
                        handleInputChange={this.handleInputChange}
                        handleFilterSubmit={this.handleFilterSubmit}
                    />
                    <Sort
                        value={this.state.sort}
                        handleInputChange={this.handleInputChange}
                        handleSortSubmit={this.handleSortSubmit}
                    />
                </SearchForm>
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
                        ))) : (<h3 className="text-center text-danger mt-3">No employee found</h3>)
                    }
                </Table>

            </div >
        )
    }
}

export default EmployeeContainer;
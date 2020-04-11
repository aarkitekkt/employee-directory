import React from "react";

function Search(props) {
    return (

        <div className="form-group">
            <input
                className="form-control"
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                placeholder="Employee Name"
                id="search"
            />
            <button className="btn btn-secondary mt-2" onClick={props.handleFormSubmit}>
                Search Employees
            </button>
        </div>

    );
}

export default Search;
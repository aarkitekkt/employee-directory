import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    placeholder="Employee Nane"
                    id="search"
                />
                <button onClick={props.handleFormSubmit}>
                    Search Employees
                </button>
            </div>
        </form>
    );
}

export default SearchForm;
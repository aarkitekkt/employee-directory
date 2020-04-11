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
                    placeholder="Employee Name"
                    id="search"
                />
                <button onClick={props.handleFormSubmit}>
                    Search Employees
                </button>
                <button onClick={props.handleListReset}>
                    Reset
                </button>
            </div>
        </form>
    );
}

export default SearchForm;
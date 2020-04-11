import React from "react";

function Sort(props) {
    return (
        <div className="form-group">
            <select
                className="form-control"
                onChange={props.handleInputChange}
                id="position"
                name="sort"
                value={props.value}
            >
                <option value="name">name</option>
                <option value="position">position</option>
                <option value="role">role</option>
            </select>
            <button className="btn btn-secondary mt-2" onClick={props.handleSortSubmit}>
                Sort Employees
            </button>
        </div>
    );
}

export default Sort;
import React from "react";

function Filter(props) {
    return (
        <div className="form-group">
            <select
                className="form-control"
                onChange={props.handleInputChange}
                id="position"
                name="filter"
                value={props.value}
            >
                <option value="Forward">Forward</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Defender">Defender</option>
                <option value="Goalkeeper">Goalkeeper</option>
            </select>
            <button className="btn btn-secondary mt-2" onClick={props.handleFilterSubmit}>
                Filter By Position
            </button>
        </div>
    );
}

export default Filter;
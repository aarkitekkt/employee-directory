import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div>
                {props.children}
                <button className="btn btn-success" onClick={props.handleListReset}>
                    Reset
                </button>
            </div>
        </form>
    );
}

export default SearchForm;
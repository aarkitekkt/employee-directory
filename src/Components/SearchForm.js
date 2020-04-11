import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div>
                {props.children}
                <button className="btn btn-info" onClick={props.handleListReset}>
                    Reset
                </button>
            </div>
        </form>
    );
}

export default SearchForm;
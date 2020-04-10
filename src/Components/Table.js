import React from "react";


function Table(props) {

    return (
        <div>
            <table>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Role</th>
                {props.children}
            </table>
        </div>
    )

}

export default Table;
import React from "react";
import Employee from "./Employee"

function Table() {
    return (
        <table>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Role</th>
            <Employee />
        </table>
    )
}

export default Table;
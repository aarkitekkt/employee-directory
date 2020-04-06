import React from "react";


function Employee(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.position}</td>
            <td>{props.role}</td>
        </tr>
    )
}

export default Employee;
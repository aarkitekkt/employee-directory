import React from "react";


function Employee(props) {
    return (
        <tr key={props.id}>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.position}</td>
            <td>{props.role}</td>
        </tr>
    )
}

export default Employee;
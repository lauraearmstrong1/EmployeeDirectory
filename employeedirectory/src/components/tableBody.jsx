import React from "react";

const TableBody = props => {
    return (
        <tbody>
            
            {props.users ? props.users.map((user, i) =>(<tr>
                        <th scope="row">{i + 1}</th>
                        <td>{`${user.name.first} ${user.name.last}`}</td>
                        <td>{user.email}</td>
                        <td>{user.location.country}</td>
                        <td>{user.cell}</td>
                    </tr>
                )
                )
            :<></>
            }
        </tbody>
    )
}
export default TableBody
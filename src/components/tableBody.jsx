import React from "react";
import './main.css'

const TableBody = props => {
    return (
        <tbody className="text-info">
            
            {props.users ? props.users.map((user, i) =>(<tr key={user.login.uuid}>
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
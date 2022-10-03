import React from 'react'

function UserDetails({person}) {
    let {name,age,skill} = person;
    return (
        <div>
             <li> {name}  ({age}) {skill} </li>
        </div>
    )
}

export default UserDetails

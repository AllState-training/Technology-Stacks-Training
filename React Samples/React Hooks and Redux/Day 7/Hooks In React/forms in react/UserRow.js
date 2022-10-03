import React, { Component } from 'react'
import axios from 'axios';

export class UserRow extends Component {

    deleteUser = () => {
        axios.delete(`http://localhost:3005/users/${this.props.user.id}`)
             .then(
                 response => console.log(response)
             )
             .catch(
                 error => console.log(error)
             )
    }
    render() {
       let {user} = this.props;
        return (
                <tr> 
                        <td>{user.id}</td>
                        <td>{user.userName}</td>
                        <td>{user.topic}</td>
                        <td><button onClick={this.deleteUser} className="btn btn-danger">Delete</button></td>
                </tr>
        )
    }
}

export default UserRow

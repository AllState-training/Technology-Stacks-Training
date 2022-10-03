import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
class UserRow extends Component {


    deleteUser = () =>{
     //   console.log(this.props);
        axios.delete(`http://localhost:3005/users/${this.props.user.id}`)
             .then(
                 this.props.dispatch({
                     type:'DELETE_USER',
                     id:this.props.user.id
                 })
             )
             .catch(
                 error => console.log(error)
             )
    }

    render() {
        let {user} = this.props;
        return (
            <div>
                <li key={user.id}> {user.id} {user.userName},({user.topic}) 
                &nbsp;&nbsp; 
                <button 
                onClick={this.deleteUser}
                className="btn btn-danger">
                    Delete
                </button>
                <hr></hr>
                </li>               
            </div>
        )
    }
}

export default connect()(UserRow);

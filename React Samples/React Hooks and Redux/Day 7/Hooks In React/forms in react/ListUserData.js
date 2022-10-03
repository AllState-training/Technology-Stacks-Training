import React, { Component } from 'react'
import axios from 'axios';
import UserRow from './UserRow';
export class ListUserData extends Component {

    constructor() {
        super()
    
        this.state = {
             users : [],
             flag:false
        }
    }

    async componentDidMount(){
        // axios.get('http://localhost:3005/users')
        //      .then(
        //          response => {
        //               this.setState({
        //                    users:response.data
        //               },
        //               () => {
        //                   console.log(this.state.users);
        //               })
        //          }
        //      )

        // async and await
        try{
            const response = await axios.get('http://localhost:3005/users');
            this.setState({
                users:response.data ,
                flag : true
            })
        }catch(error){
            console.log(error);
        }
        
    }
    
    render() {
        return (
            <div>
                <h2>Listing the User Data</h2>
                {this.state.flag?
                <table className="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Comments</th>
                    <th>Topic</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.users.map(
                    (user) => (
                        <UserRow key={user.id} user={user}/>
                  )
                    
                )}
                </tbody>
                </table>:<h6>Json Server is not running</h6>
                }
            </div>
        )
    }
}

export default ListUserData

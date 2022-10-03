import React, { Component } from 'react'
import axios from 'axios';
export class ListUserData extends Component {

    constructor() {
        super()
    
        this.state = {
             users : []
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
                users:response.data 
            })
        }catch(error){
            console.log(error);
        }
        
    }
    
    render() {
        return (
            <div>
                <h2>Listing the User Data</h2>
                {this.state.users.map(
                    (user) => (
                        <li key={user.id}> {user.id} {user.userName},({user.topic}) 
                        &nbsp;&nbsp; <button
                                        className="btn btn-danger">Delete</button>
                        <hr></hr>
                        </li>
                        
                    )
                )}
            </div>
        )
    }
}

export default ListUserData

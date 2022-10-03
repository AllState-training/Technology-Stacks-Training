import React, { Component } from 'react'
import axios from 'axios';
import UserRow from './UserRow';
import { connect } from 'react-redux';
export class ListUserData extends Component {


    async componentDidMount(){
        console.log(this.props);
        axios.get('http://localhost:3005/users')
             .then(
                 response => {
                     this.props.dispatch({
                         type:'FETCH_USERS',
                         users:response.data
                     }) 
                 }
             )

        // // async and await
        // try{
        //     const response = await axios.get('http://localhost:3005/users');
        //     this.setState({
        //         users:response.data 
        //     })
        // }catch(error){
        //     console.log(error);
        // }
        
    }
    
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <h2>Listing the User Data</h2>
                
                {this.props.users.map(
                    (user) => (
                    
                        <UserRow key={user.id} user={user}/>
                    )
                )}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {users : state}
}

export default connect(mapStateToProps)(ListUserData);

import React, { Component } from 'react'
import UserDetails from './UserDetails';

export class UserList extends Component {

    render() {
        const names = ['John','Mark','Lisa','Andrew','Thomas'];
        const nameList = names.map((name,index) => <li key={index}>{index} {name}</li>);

        const persons = [{
                            id:1,
                            name:'John',
                            age:25,
                            skill:'Angular'
            },{
                            id:2,
                            name:'Mark',
                            age:28,
                            skill:'React'
            },{
                            id:3,
                            name:'Mary',
                            age:23,
                            skill:'Vue'
            }];

      const personList = persons.map(
            person => <UserDetails key={person.id} person={person}/>
        );

        return (
            <div>
                <h2>List of Users</h2>
                {/* {nameList} */}
                
                {  
                    personList
                }
            </div>
        )
    }
}

export default UserList

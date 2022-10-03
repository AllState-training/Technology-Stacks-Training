import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    render() {

    const user = {
        firstName:'Anup',
        lastName:'Kini',
        address:'Pune'
    }

        return (
            <div>
                {/* <Child firstName={user.firstName} 
                        lastName={user.lastName}
                        address={user.address}/> */}

                 <Child {...user}> 
                 <h3>This Message is Projected</h3>
                 <h4>This is Another Message</h4>
                 </Child>
            </div>
        )
    }
}

export default Parent

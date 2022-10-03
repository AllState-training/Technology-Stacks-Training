import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(){
        super();

        this.state = {
            isLoggedIn : false
        }
    }

    clickHandler(){
        
        this.setState({
            isLoggedIn : !this.state.isLoggedIn
        })
    }

    render() {  

        // Conditional Operator Example
        return(
            <>
            <button onClick={() => this.clickHandler()}>Toggle</button>
            {this.state.isLoggedIn ? <h3>Welcome Anup</h3>
                                  :<h3>Welcome Guest</h3>}
            </>
        );

        // Example 2 if-else
        // if(this.state.isLoggedIn){
        //     return <h3>Welcome Anup</h3>
        // }else{
        //     return <h3>Welcome Guest</h3>
        // }


        // Simple Example
        // return (
        //     <div>
        //         <h2>User Greeting</h2>
        //         <h3>Welcome Anup</h3>
        //         <h3>Welcome Guest</h3>
        //     </div>
        //)
    }
}

export default UserGreeting

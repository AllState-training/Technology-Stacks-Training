import React, { Component } from 'react'

export class RegComp extends Component {

     // NOT =>  shouldComponentUpdate => false
    
    render() {
        console.log('Regular Component render method is called..');
        return (
            <div>
                
            </div>
        )
    }
}

export default RegComp

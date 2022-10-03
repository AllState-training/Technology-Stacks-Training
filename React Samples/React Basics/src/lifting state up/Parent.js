import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    state = {
        parentName:'Kashinath Kini',
        childName:null
    }

    getChildName = (name) =>{
        console.log(name);
        this.setState({
            childName:name
        })
    }


    render() {
        return (
            <div>
                <h2>Passing Event Handler as a props to Child Component</h2>
                <h3>Parent Name : {this.state.parentName}</h3>

                <Child getChildName={this.getChildName}/>
                
                {this.state.childName ? <h3>Child Name : {this.state.childName}</h3>:''}
            </div>
        )
    }
}

export default Parent

import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class App extends Component {

    state ={
        name:'Anup'
    }

    componentDidMount(){ //1 - NOT Checked , 2 - Check 
        
        setInterval(
            () => {
                this.setState({
                    name:'Anup'
                })
            },
            2000
        )
    }


    render() {
        console.log('App Component render method is called..');
        return (
            <div>
                <h1>Pure Component</h1>
                <RegComp/>
                <PureComp/>
            </div>
        )
    }
}

export default App

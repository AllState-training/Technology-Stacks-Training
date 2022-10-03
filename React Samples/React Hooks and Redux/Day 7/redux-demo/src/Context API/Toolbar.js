import React, { Component } from 'react'
import { ButtonContext } from './myContext'
import ThemedButton from './ThemedButton'

class Toolbar extends Component {

    static contextType = ButtonContext;

    render() {
        
        console.log(this.context);
        return (
            <div>
                <ThemedButton/>
            </div>
        )
    }
}



export default Toolbar

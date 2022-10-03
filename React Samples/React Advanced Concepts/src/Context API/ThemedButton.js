import React, { Component } from 'react'
import { ButtonContextConsumer } from './myContext'

class ThemedButton extends Component {
    render() {
        return (
            <div>
                <ButtonContextConsumer>
                    
                    {
                        (value) => (
                            <button
                            style={{backgroundColor:`${value}`}}
                            >Click Here</button>
                        )
                    }

                </ButtonContextConsumer>              
            </div>
        )
    }
}

export default ThemedButton

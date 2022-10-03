import React, { PureComponent } from 'react'

class PureComp extends PureComponent {


    // shouldComponentUpdate => false

    // Performance BOOST -> PC 

    render() {

        console.log('Pure Component render method is called..');

        return (
            <div>
                
            </div>
        )
    }
}

export default PureComp

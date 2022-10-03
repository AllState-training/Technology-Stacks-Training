import React, { Component } from 'react'

export class Child extends Component {
    render() {
        let {firstName,lastName,address,children}  = this.props;
        console.log(this.props);
        console.log(children);
        return (
            <div>
                <h2>{firstName} {lastName} {address}</h2>
                    {children[1]}
            </div>
        )
    } // end of render
}


Child.defaultProps = {
     firstName:'John',
     lastName:'Papa',
     address:'USA'
}

export default Child

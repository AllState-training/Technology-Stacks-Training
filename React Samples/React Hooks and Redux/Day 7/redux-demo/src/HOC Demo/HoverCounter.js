import React, { Component } from 'react'
import withCounter from './withCounter';

class HoverCounter extends Component {
    // state = {
    //     count : 0
    // }

    // mouseOverHandler = () => {

    //     this.setState( prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }

    render() {
        let {count,incrementHandler} = this.props;
        return (
            <div>
                <h2>Mouse Over Counter</h2> 
                <h3>Name : {this.props.name}</h3>
                <h3 onMouseOver={incrementHandler}>On Mouse Over {count} times
                </h3>               
            </div>
        )
    }
}

export default withCounter(HoverCounter);

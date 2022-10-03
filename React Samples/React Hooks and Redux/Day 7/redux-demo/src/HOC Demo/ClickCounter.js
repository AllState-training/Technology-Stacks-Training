import React, { Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {

    // state = {
    //     count : 0
    // }

    // clickHandler = () => {

    //     this.setState( prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }

    render() {
        let {count,incrementHandler} = this.props;
        return (
            <div>
                
                <h2>Click Counter</h2>
                <h3>{this.props.name}</h3>
                <button onClick={incrementHandler}>
                    Clicked {count} times
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCounter);

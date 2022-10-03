import React, { Component } from 'react'

export class Counter extends Component {

    constructor(){
        super();

        this.state = {
            count:0
        }
    }

    incrementCount = () =>{

        // Asynch Method
        // this.setState({
        //     count:this.state.count+1
        // },() => {
        //     console.log(this.state.count);
        // })

        // Updation With Respect to Previous State
        this.setState( (prevState) => ({
            count:prevState.count+1
        }),() => {
            console.log(this.state.count);
        })

    }

    incrementFive = () =>{

        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }


    render() {
        return (
            <div>
                <h2>Count {this.state.count}</h2>
                <button
                onClick={() => this.incrementFive()}
                >Increment Count</button>
            </div>
        )
    }
}

export default Counter

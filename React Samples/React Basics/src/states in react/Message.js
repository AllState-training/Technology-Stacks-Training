import React, { Component } from 'react'

export class Message extends Component {

    constructor(){
        super();
        this.state = {
            message:'Welcome Visitor...'   
        }

        this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage(){
        console.log('Clicked...');
        // Not Possible
        //this.state.message = 'Thank you for Subscribing...';
        console.log(this);
        this.setState({
            message:'Thank you for Subscribing...'
        });
    }

    changeMessage2 = (event) =>{
        console.log(event);
        this.setState({
            message:`Thank you for Subscribing..`
        });
    }

    render() {
        
        return (
            <div>
                <h2> {this.state.message}</h2>
                <button 
                onClick={ (e) => this.changeMessage2(e) }>
                  Subscribe
                </button>
            </div>
        )
    }

}

export default Message

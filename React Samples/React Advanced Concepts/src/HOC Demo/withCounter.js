import React, { Component } from 'react'

// HOC function     
const withCounter = (WrapperComponent) => {
    
    class NewComponent extends Component{

        state = {
            count : 0
        }
    
        incrementHandler = () => {
    
            this.setState( prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render(){
            return (
                <WrapperComponent
                count={this.state.count}
                incrementHandler={this.incrementHandler}
                {...this.props}
                /> // <ClickCounter> or <HoverCounter>
            )
        }
    }

    return NewComponent;
}

export default withCounter



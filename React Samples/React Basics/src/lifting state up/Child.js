import React, { Component } from 'react'

export class Child extends Component {

    state = {
        childName:``
    }

    componentDidMount(){
      this.setState({
          childName:'Matt Demon'
      })   
    }

    render() {
        //console.log(this.state.childName);
        //console.log(this.props);
        
        let {getChildName}  = this.props;
        let {childName} = this.state;
        return (
            <div>
                <h3>Child Component</h3>
                <button className="btn btn-primary"
                 onClick={() => getChildName(childName)}>Get Child</button>
            </div>
        )
    }
}

export default Child

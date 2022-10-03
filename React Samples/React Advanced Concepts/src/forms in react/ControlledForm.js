import React, { Component } from 'react'
import axios from 'axios';
class ControlledForm extends Component {

    constructor(){
        super();

        this.state = {
            userName:'',
            comments:'',
            topic:''
        }

        this.myForm = React.createRef();
    }

    changeHandler = (event) =>{

         this.setState({
             [event.target.name] : event.target.value
         })
    }

    // changeUserName = (event) => {
        
    //     this.setState({
    //         userName:event.target.value
    //     })
    // }

    // changeComments = (event) =>{
    //     this.setState({
    //         comments : event.target.value
    //     })
    // }

    // changeTopic = (event) =>{

    //     this.setState({
    //         topic : event.target.value
    //     })
    // }

    handleFormSubmit = (event) =>{
       // console.log(`User Name : ${this.state.userName} Comments : ${this.state.comments} Topic : ${this.state.topic}`);
       let {userName,comments,topic} = this.state;
       let data = {
           "userName":userName,
           "comments":comments,
           "topic":topic
       }

        axios.post(`http://localhost:3005/users`,data)
             .then(
                 
                 response => {
                      if(response.status === 201){
                          console.log(response.data);
                      }
                 }
             )
             .catch(
                 error => console.log(error)
             );
        
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
            <form autoComplete="off" 
                  onSubmit={this.handleFormSubmit}
                  ref={this.myForm}>
              <div className="form-group">
                <label>Username :</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={this.state.userName}
                  onChange={this.changeHandler}
                  name="userName"
                />
                UserName : {this.state.userName}
              </div>
              <div className="form-group">
                <label>Comments</label>
                <textarea
                  className="form-control"
                  defaultValue={this.state.comments}
                  onChange={this.changeHandler}
                  name="comments"
                ></textarea>
                 Comments : {this.state.comments}
              </div>
    
    
              <div className="form-group">
                <label>Topic</label>
                <select
                    className="form-control"
                    defaultValue={this.state.topic}
                    onChange={this.changeHandler}
                    name="topic"
                >
                    <option>React</option>
                    <option>Angular</option>
                    <option>Vue</option>
                </select>
                Topic : {this.state.topic}
              </div>
    
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )
    }
}

export default ControlledForm

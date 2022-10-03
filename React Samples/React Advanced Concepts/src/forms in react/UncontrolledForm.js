import React, { Component } from "react";

class UncontrolledForm extends Component {
  constructor() {
    super();

    this.nameInput = React.createRef();
    this.fileInput = React.createRef();
    //console.log(this.nameInput);
  }

  handleSubmit(event) {
    alert(`A name is submitted : ${this.nameInput.current.value}
           File Selected : ${this.fileInput.current.files[0].name}`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h2>Un-Controlled Forms</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label>Name :</label>
            <input 
                className="form-control"
                defaultValue="Bob"
                type="text" ref={this.nameInput} />
             <label>Uplaod File:</label>   
            <input 
                className="form-control"
                type="file"
                ref={this.fileInput}/>
            <input
              className="btn btn-primary"
              type="submit"
              defaultValue="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;

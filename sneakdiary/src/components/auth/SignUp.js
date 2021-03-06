import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    size: "",
    username: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="size">Size</label>
            <input type="number" id="size" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn light-blue lighten-2 z-depth-0">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;

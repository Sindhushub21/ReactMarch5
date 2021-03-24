import React, { Component } from 'react';

let testEmailsArr = [
  { email: "test@test.com", password: "password" },
  { email: "test2@test.com", password: "password2" },
  { email: "johnSmith@test.com", password: "password3" }
]

export class Login extends Component {
  static displayName = Login.name;

  state = {
    email: "",
    password: ""
  }

  handleInput = (event) => {
    event.persist();
    this.setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  handleAuthentication = (event) => {
    event.preventDefault();
    let succesfulLogIn = false;
    for (let i = 0; i < testEmailsArr.length; i++) {
      if (this.state.email === testEmailsArr[i].email && this.state.password === testEmailsArr[i].password) {
        succesfulLogIn = true;
        break;
      }
    }
    if (succesfulLogIn) {
      console.log("Logged In!");
    }
    else {
      console.log("Incorrect UserName or Password");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAuthentication}>
        <input name="email" placeholder="Email" onChange={this.handleInput} />
        <input name="password" placeholder="Password" type="password" onChange={this.handleInput} />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
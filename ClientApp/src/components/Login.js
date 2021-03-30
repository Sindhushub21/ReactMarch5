import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
    let loggedIn = false;
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.state.email === this.props.users[i].email && this.state.password === this.props.users[i].password) {
        loggedIn = true;
        if (this.props.users[i].isAdmin) {
          this.props.UpdateLoginStatus(loggedIn, true, this.props.users[i]);
        }
        else
        {
          this.props.UpdateLoginStatus(loggedIn, false, this.props.users[i]);
        }
        console.log("Logged In!");
        break;
      }
    }
    if (!loggedIn) {
      alert("Incorrect UserName or Password");
    }
  }


  render() {
    if (this.props.loggedIn)
    {
      return (
        <div>
          <h1>Welcome to 'Car-Dealership'!</h1>
        </div>
      );
    }
    else
    {
      return (
        <div>
          <h1>Please Login</h1>
          <form onSubmit={this.handleAuthentication}>
            <input name="email" placeholder="Email" onChange={this.handleInput} />
            <input name="password" placeholder="Password" type="password" onChange={this.handleInput} />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
  }
}

export default Login;
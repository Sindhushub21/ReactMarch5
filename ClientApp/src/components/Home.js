import React, { Component } from 'react';
import Login from './Login';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="home">
        <h1>Welcome to 'Car-Dealership'!</h1>
        <p>Please Login or Sign-Up</p>
        <Login users={this.props.users} UpdateLoginStatus={this.props.UpdateLoginStatus}/>
      </div>
    );
  }
}

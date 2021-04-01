import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
      return (
        <div>
          {this.props.loggedIn && <NavMenu UpdateLoginStatus={this.props.UpdateLoginStatus}/>}
          {this.props.children}
        </div>
      );
  }
}

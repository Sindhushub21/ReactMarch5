import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import { Redirect } from 'react-router';
import { Link, Route } from "react-router-dom";


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
        else {
          this.props.UpdateLoginStatus(loggedIn, false, this.props.users[i]);
        }
        break;
      }
    }
    if (!loggedIn) {
      alert("Incorrect UserName or Password");
    }
  }


  render() {
    if (this.props.loggedIn) {
      return <Redirect push to="/Inventory" />;
    }
    else {
      return (
        <Container fluid>
          <Row style={{ height: "20vh" }} />
          <Row>
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
              <Card border="primary" style={{ padding: '8px' }}>
                <Card.Header as="h5" style={{ textAlign: 'center' }}>Login</Card.Header>
                <Form onSubmit={this.handleAuthentication}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleInput} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleInput} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>                                 
                   <Link to='/Registration' class = "small">  Don't have an account? Sign Up</Link>                                               
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default Login;
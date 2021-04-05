import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link, Route } from "react-router-dom";


export class Registration extends Component {

  state = {
    user: {
      email: "",
      password: ""     
    }   
  }

  submitUser = (event) => {
    event.persist();
    event.preventDefault();

    //Validate if the passwords match.. if they match submit the form
    this.props.postUser(this.state.user);
  }

  handleInput = (event) => {
    event.persist();
    this.setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  render() {
    return (      
      <Container fluid>
      <Row style={{ height: "20vh" }} />
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <Card border="primary" style={{ padding: '8px' }}>
            <Card.Header as="h5" style={{ textAlign: 'center' }}>Registration</Card.Header>
            <Form onSubmit={this.submitUser}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleInput} />
                <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
                 </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter a Password" onChange={this.handleInput} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="password2" placeholder="Confirm Password" onChange={this.handleInput} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>                                 
              <Link to="/Login" class = "small"> Return to Login Screen</Link>   
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
   );
  }
}

export default Registration;
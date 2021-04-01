import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import { Redirect } from 'react-router';


export class SellVehicle extends Component {

  state = {
    car: {
      owner: "",
      year: "",
      make: "",
      model: "",
      color: "",
      price: "",
      user: "",
      img: ""
    },
    user: "",
    carSubmited: false
  }

  submitCar = (event) => {
    event.persist();
    this.setState(prevState => ({
      ...prevState,
      carSubmited: true
    }))
    event.preventDefault();
    this.props.postCar(this.state.car);
  }

  otherFunction = (event) => {
    console.log("Hello");
  }

  handleInputChange = (event) => {
    event.persist();
    this.setState(prevState => ({
      car: {
        ...prevState.car,
        [event.target.name]: event.target.value,
        user: "Generic User"
      }
    }))
  }

  render() {
    if (this.state.carSubmited) {
      return <Redirect push to="/Inventory" />;
    }
    return (
      <Container fluid>
        <Row>
          <Col />
          <Col>
            <Card style={{ width: '24rem', padding: '8px' }}>
              <Card.Header as="h5" style={{ textAlign: 'center' }}>Sell Vehicle</Card.Header>
              <Form onSubmit={this.submitCar}>
                  <Form.Group controlId="formOwner">
                    <Form.Label>Owner</Form.Label>
                    <Form.Control name="owner" placeholder="Enter Owner Name Here" onChange={this.handleInputChange} />
                  </Form.Group>
                  <Form.Group controlId="formYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control name="year" placeholder="Enter Year of Vehicle Here" onChange={this.handleInputChange} />
                  </Form.Group>
                  <Form.Group controlId="formMake">
                    <Form.Label>Make</Form.Label>
                    <Form.Control name="make" placeholder="Enter Make of Vehicle Here" onChange={this.handleInputChange} />
                  </Form.Group>
                  <Form.Group controlId="formModel">
                    <Form.Label>Model</Form.Label>
                    <Form.Control name="model" placeholder="Enter Model of Vehicle Here" onChange={this.handleInputChange} />
                  </Form.Group>
                  <Form.Group controlId="formColor">
                    <Form.Label>Color</Form.Label>
                    <Form.Control name="color" placeholder="Enter Color of Vehicle Here" onChange={this.handleInputChange} />
                  </Form.Group>
                  <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" type="number" placeholder="Enter Price of Vehicle Here" onChange={this.handleInputChange} />
                  </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default SellVehicle;
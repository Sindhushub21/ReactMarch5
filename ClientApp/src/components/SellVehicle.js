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
  }

  submitCar = (event) => {
    event.persist();
    event.preventDefault();
    this.props.postCar(this.state.car);
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
    if (this.props.carSubmited) {
      return <Redirect push to="/Inventory" />;
    }
    return (
      <Container fluid>
        <h1 className="text-center">Sell Vehicle</h1>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', padding: '16px 0'}}>
            <Card style={{ width: '24rem' }}>
              <Card.Header as="h5" style={{ textAlign: 'center' }}>Car Details</Card.Header>
              <Form onSubmit={this.submitCar} style={{ padding: '16px 16px'}}>
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
        </Row>
      </Container>
    );
  }
}

export default SellVehicle;
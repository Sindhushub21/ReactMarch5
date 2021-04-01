import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';


export class Inventory extends React.Component {

  constructor(props) {
    super(props)
  }

  returnListOfCarsInHtml(listedCars) {
    const tmpCarsList = []
    for (let i = 0; i < listedCars.length; i++) {
      tmpCarsList.push(
        <div key={i}>
          <Card>
            <Card.Header>Car {i + 1}</Card.Header>
            <Card.Body>
              <b>Owner:</b> {listedCars[i].owner}
              <br/>
              <b>Make:</b> {listedCars[i].make}
              <br/>
              <b>Model:</b> {listedCars[i].model}
              <br/>
              <b>Year:</b> {listedCars[i].year}
              <br/>
              <b>Color:</b> {listedCars[i].color}
              <br/>
              <b>Price:</b> {(listedCars[i].price)}
            </Card.Body>
            <Card.Footer><p>Listed By: {listedCars[i].user}</p></Card.Footer>
          </Card>
        </div>
      )
    }
    return tmpCarsList
  }

  addNewCar = (car) => {
    console.log("Inventory.js / addNewCar();");
  }

  componentDidMount()
  { 
    this.props.getCars();
    console.log("Yo im mounted");
  }

  render() {
    return (
      <div className="cars-inventory">
        <h1 style={{ textAlign: 'center' }}>Inventory</h1>
        <CardColumns>
          {this.returnListOfCarsInHtml(this.props.carsList)}
        </CardColumns>
      </div>
    );
  }





  
  // // --- CAR VALIDATION RULES ---
  // validateYearPrice = (car) => {
  //   if (isNaN(car.year) || isNaN(car.price)) {
  //     alert("Year or Price Field failed!");
  //     return false
  //   }
  //   else {
  //     return true;
  //   }
  // }
  // validateMakeOwnerModel = (car) => {
  //   if ((String(car.model).length > 50) || (String(car.model).length < 3)) {
  //     //fails
  //     alert("Model Field contains too many or too little characters!");
  //     return false;
  //   }
  //   if ((String(car.owner).length > 50) || (String(car.owner).length < 3)) {
  //     alert("Owner Field contains too many or too little characters!");
  //     return false;
  //   }
  //   if ((String(car.make).length > 50) || (String(car.make).length < 3)) {
  //     alert("Make Field contains too many or too little characters!");
  //     return false;
  //   }
  //   return true;
  // }
  // validateColor = (car) => {
  //   if ((String(car.color).length > 50) || (String(car.color).length < 2)) {
  //     alert("Color Field contains too many or too little characters!");
  //   }
  //   else {
  //     if (this.isColor(car.color)) {
  //       return true;
  //     }
  //     else {
  //       alert("Invalid Color");
  //       return false;
  //     }
  //   }
  // }
  // isColor = (strColor) => {
  //   var s = new Option().style;
  //   strColor = strColor.toLowerCase()
  //   s.color = strColor;
  //   return s.color === strColor;
  // }
  // carIsValid = (car) => {
  //   if (!this.validateYearPrice(car))
  //     return false;
  //   if (!this.validateMakeOwnerModel(car))
  //     return false;
  //   if (!this.validateColor(car))
  //     return false;
  //   return true;
  // }
  // // --- CAR VALIDATION RULES ---
}

export default Inventory;
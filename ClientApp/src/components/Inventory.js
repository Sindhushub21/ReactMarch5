import React from 'react';
import { vehicles } from "../utils/data";


export class Inventory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      carsList: vehicles,
      viewingList: true
    };
  }

  returnListOfCarsInHtml(listedCars) {
    const tmpCarsList = []
    for (let i = 0; i < listedCars.length; i++) {
      tmpCarsList.push(
        <div key={i}>
          <p>Car {i + 1}</p>
          <ul>
            <li>Owner: {listedCars[i].owner}</li>
            <li>Make: {listedCars[i].make}</li>
            <li>Model: {listedCars[i].model}</li>
            <li>Year: {listedCars[i].year}</li>
            <li>Color: {listedCars[i].color}</li>
            <li>Price: {(listedCars[i].price).toLocaleString('en-US', { style: 'currency', currency: 'USD', })}</li>
            <li>Listed By: {listedCars[i].user}</li>
          </ul>
        </div>
      )
    }
    return tmpCarsList
  }

  addNewCar = (car) => {
    if (this.carIsValid(car)) {
      // Add the 'New Car' to the existing inventory: CarsList
      this.setState(prevState => ({
        ...prevState.car,
        carsList: this.state.carsList.concat(car)
      }))
      // switch view to CarsList
      this.displayForm();
    }
  }

  displayForm = () => {
    this.setState(prevState => ({
      ...prevState,
      viewingList: !this.state.viewingList
    }))
  }

  render() {
    return (
      <div className="cars-inventory">
        <h1>Cars Page!</h1>
        {this.returnListOfCarsInHtml(this.state.carsList)}
      </div>
    );
  }

  // --- CAR VALIDATION RULES ---
  validateYearPrice = (car) => {
    if (isNaN(car.year) || isNaN(car.price)) {
      alert("Year or Price Field failed!");
      return false
    }
    else {
      return true;
    }
  }
  validateMakeOwnerModel = (car) => {
    if ((String(car.model).length > 50) || (String(car.model).length < 3)) {
      //fails
      alert("Model Field contains too many or too little characters!");
      return false;
    }
    if ((String(car.owner).length > 50) || (String(car.owner).length < 3)) {
      alert("Owner Field contains too many or too little characters!");
      return false;
    }
    if ((String(car.make).length > 50) || (String(car.make).length < 3)) {
      alert("Make Field contains too many or too little characters!");
      return false;
    }
    return true;
  }
  validateColor = (car) => {
    if ((String(car.color).length > 50) || (String(car.color).length < 2)) {
      alert("Color Field contains too many or too little characters!");
    }
    else {
      if (this.isColor(car.color)) {
        return true;
      }
      else {
        alert("Invalid Color");
        return false;
      }
    }
  }
  isColor = (strColor) => {
    var s = new Option().style;
    strColor = strColor.toLowerCase()
    s.color = strColor;
    return s.color === strColor;
  }
  carIsValid = (car) => {
    if (!this.validateYearPrice(car))
      return false;
    if (!this.validateMakeOwnerModel(car))
      return false;
    if (!this.validateColor(car))
      return false;
    return true;
  }
  // --- CAR VALIDATION RULES ---
}

export default Inventory;
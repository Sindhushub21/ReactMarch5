import React, { Component } from 'react';

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
    }
  }

  submitCar = (event) => {
    //event.preventDefault();
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

  setPhotoFromUpload = (event) => {
    debugger
    const fileList = event.target.files;
    console.log("fileList:", fileList);
    // this.setState(prevState => ({
    //   car: {
    //     ...prevState.car,
    //     img: fileList.path
    //   }
    // }))
  }

  render() {
    return (
      <div>
        <h1>Sell Vehicle Page!</h1>
        <br></br>
        <form onSubmit={this.submitCar}>
          <input type="input" name="owner" placeholder="Owner" onChange={this.handleInputChange}></input>
          <input type="input" name="year" placeholder="Year" onChange={this.handleInputChange}></input>
          <input type="input" name="make" placeholder="Make" onChange={this.handleInputChange}></input>
          <input type="input" name="model" placeholder="Model" onChange={this.handleInputChange}></input>
          <input type="input" name="color" placeholder="Color" onChange={this.handleInputChange}></input>
          <input type="input" name="price" placeholder="Price" onChange={this.handleInputChange}></input>
          {/* <input type="file" name="filePhoto" onChange={this.setPhotoFromUpload} id="filePhoto" data-errormsg="PhotoUploadErrorMsg"></input> */}
          <button type="submit">Submit</button>
        </form>
        {/* <img src={this.state.img} id="previewHolder" alt="Uploaded Image Preview Holder" width="250px" height="250px"/> */}
        {/* <button className="btn btn-primary" onClick={this.incrementCounter}>View History</button> */}
      </div>
    );
  }
}

export default SellVehicle;
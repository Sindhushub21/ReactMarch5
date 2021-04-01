import React, { Component } from 'react'
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Login } from './components/Login';
import { Inventory } from './components/Inventory';
import { SellVehicle } from './components/SellVehicle';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  state = {
    inventoryData: [],
    url: null,
    loading: false,
    users: [],
    loggedIn: false,
    isAdmin: false,
    currentUser: null,
  }

  getData = async (url) => {
    const response = await fetch(url, {
      headers: {
        'content-Type': 'application/json',
      },
    });
    return response.json();
  };

  postData = async (data, url) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response;
  };

  postCar = async (car) => {
    await this.postData(car, `https://${this.props.connection}/api/cars/post`);
  };

  componentDidMount() {
    this.getData(`https://${this.props.connection}/api/cars`)
      .then((data) => {
        this.setState({
          ...this.state,
          inventoryData: data,
          loading: false
        });
      })
    this.getData(`https://${this.props.connection}/api/users`)
      .then((data) => {
        this.setState({
          ...this.state,
          users: data
        });
      })
  };

  getCars = () => {
    this.getData(`https://${this.props.connection}/api/cars`)
      .then((data) => {
        this.setState({
          ...this.state,
          inventoryData: data,
          loading: false
        });
      })
  }

  UpdateLoginStatus = (status, isAdmin, user) => {
    console.log("UpdateLoginStatus()");
    this.setState({
      ...this.state,
      loggedIn: status,
      isAdmin: isAdmin,
      currentUser: user
    });
    console.log(`1: loggedIn = ${this.state.loggedIn}`);
  }

  render() {
    return (
      <div className="App">
        <Layout users={this.state.users} UpdateLoginStatus={this.UpdateLoginStatus} loggedIn={this.state.loggedIn}>
          <Route exact path='/'>
            <Login users={this.state.users} UpdateLoginStatus={this.UpdateLoginStatus} loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} />
          </Route>
          <Route path='/Inventory'>
            <Inventory carsList={this.state.inventoryData} getCars={this.getCars} />
          </Route>
          <Route path='/SellVehicle'>
            <SellVehicle postCar={this.postCar} />
          </Route>
        </Layout>
      </div>
    )
  }
}

export default App
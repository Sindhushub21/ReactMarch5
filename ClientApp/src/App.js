import React, { Component } from 'react'
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Inventory } from './components/Inventory';
import { SellVehicle } from './components/SellVehicle';
import Counter from './components/Counter';

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
        'accept' : 'application/json',
        'content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response;
  };

  postCar = (car) => {
    this.postData(car, `http://${this.props.connection}/api/ToDoItems`);
  };

  componentDidMount() {
    console.log("App.js componentDidMount()");
    this.getData(`http://${this.props.connection}/`)
      .then((data) => 
      {
        this.setState({
          ...this.state,
          inventoryData: data,
          loading: false
        });
      })
      this.getData(`http://${this.props.connection}/users`)
      .then((data) => 
      {
        this.setState({
          ...this.state,
          users: data
        });
      })
  };

  UpdateLoginStatus = (status, isAdmin, user) => {
    this.setState({
      ...this.state,
      loggedIn: status,
      isAdmin: isAdmin,
      currentUser: user
    });
  }

  render() {
    return (
      <div className="App">
        <Layout users={this.state.users} UpdateLoginStatus={this.UpdateLoginStatus} loggedIn={this.state.loggedIn}>
          <Route exact path='/'>
            <Home users={this.state.users} UpdateLoginStatus={this.UpdateLoginStatus}/>
          </Route>
          <Route path='/Inventory'>
            <Inventory carsList={this.state.inventoryData}/>
          </Route>
          <Route path='/SellVehicle'>
            <SellVehicle postCar={this.postCar} />
          </Route>
          <Route path='/Counter' component={Counter} />
        </Layout>
      </div>
    )
  }
}

export default App
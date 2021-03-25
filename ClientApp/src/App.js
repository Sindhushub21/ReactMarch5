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
  }

  getData = async (url) => {
    const response = await fetch(url, {
      headers: {
        'contentType': 'application/json',
      },
    });
    return response.json();
  };

  postData = async (data, url) => {
    console.log("postData()");
    console.log(`JSON.string.data = ${JSON.stringify(data)}`); // GOOD
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'contentType': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response;
  };

  postCar = (car) => {
    // this.setState({
    //   inventoryData: this.state.inventoryData.concat(car),
    //   loading: true,
    // });
    this.postData(car, `http://${this.props.connection}:8080/postCar`);
  };

  componentDidMount() {
    this.getData(`http://${this.props.connection}:8080/`)
      .then((data) => {
        this.setState({
          ...this.state,
          inventoryData: data,
          loading: false
        });
      })
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/Inventory' component={Inventory} />
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
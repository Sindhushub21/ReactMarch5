import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

//const connection = 'localhost:8080';
//const connection = '172.20.80.1:8080';

const connection = 'localhost:5001';

const initialState = {
  count: 0
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App connection={connection}/>
    </BrowserRouter>
  </Provider>,
  rootElement);

registerServiceWorker();
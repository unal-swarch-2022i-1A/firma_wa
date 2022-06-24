import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import Main from './components/MainComponent';

const store = ConfigureStore();

class App extends Component {
  /**
   * The <Provider> component makes the Redux store available to any nested components that need to access the Redux store. 
   * Since any React component in a React Redux app can be connected to the store, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.
   * 
   * The <BrowserRouter> is a <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) 
   * to keep your UI in sync with the URL.
   * 
   * @returns <Provider>
   */
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

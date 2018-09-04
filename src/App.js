import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import ProductListContainer from './containers/ProductListContainer';
import Cart from './components/Cart';
import AutoCompleteContainer from './containers/AutoCompleteContainer'
import { AutoComplete } from './components/AutoComplete'
import Results from './components/Results'

class App extends Component {
  render() {
    return (
      <div className="App">
      <AutoCompleteContainer></AutoCompleteContainer>
 
      </div>
    );
  }
}

export default App;

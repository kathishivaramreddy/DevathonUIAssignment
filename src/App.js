import React, { Component } from 'react';
import {ProductList} from './ProductList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="navbar">
            <header className="App-header">
            </header>
        </div>

        <div className="main">
          <ProductList/>
        </div>

      </div>
    );
  }
}

export default App;

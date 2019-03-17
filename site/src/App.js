import React, { Component } from 'react';
import Header from "./components/header.js";
import Content from "./components/content.js";

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;

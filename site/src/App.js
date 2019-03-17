import React, { Component } from 'react';
import Header from "./components/header.js";
import Banner from "./components/banner.jsx";
import Content from "./components/content.js";
import Footer from "./components/footer.jsx";

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;

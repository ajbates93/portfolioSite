import React, { Component } from 'react';
import Header from "./components/header";
import Banner from "./components/banner";
import Content from "./components/content";
import Footer from "./components/footer";

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner caption={"Alex Bates"} />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;

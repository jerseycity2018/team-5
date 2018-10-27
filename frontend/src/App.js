import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Routes from './routes';
import MyFooter from './components/myFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <MyFooter />
      </div>
    );
  }
}

export default App;

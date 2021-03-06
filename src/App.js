import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/pages/home';
import Menu from './component/pages/menu';
import About from './component/pages/about';

class App extends Component {
  render() {
    
    return (
      <div >
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
      </div>

    );
  }
}




export default App;

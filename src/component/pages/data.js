import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import Menu from './component/pages/menu';
import About from './component/pages/about';

export default class data extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
      </div>
    )
  }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default" >
            <div className="container-fluid" >
                <div className="navbar-header" >
                    <Link className="navbar-brand" to="/" >Gofood</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/menu" >Menu</Link></li>
                    <li><Link to="/about" >About</Link></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

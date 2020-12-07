import React, { Component } from 'react'
import Status from './auth/Status'
import ClientsNavBar from './ClientsNavBar'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/" style={{color: "#00d1b2", fontWeight: "bold", fontSize: 30, paddingBottom: "7%"}}>
            <p>Green Store</p>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/products" className="navbar-item">
              Products
            </a>
            
            <ClientsNavBar></ClientsNavBar>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Status></Status>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

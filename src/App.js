import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      
      <nav id="nav1" className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/home">Better Doctor</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
          </ul>
          <li id="con" className="form-inline my-2 my-md-0">
          {
            !isAuthenticated() && (
                <Button
                  id="qsLoginBtn"
                  bsStyle="secondary"
                  className="btn btn-secondary mb-2"
                  onClick={this.login.bind(this)}
                >
                  Log In
                </Button>
              )
          }
          {
            isAuthenticated() && (
                <Button
                  id="qsLogoutBtn"
                  bsStyle="secondary"
                  className="btn btn-secondary mb-2"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </Button>
              )
          }
          </li>
        </div>
      </nav>
    );
  }
}

export default App;

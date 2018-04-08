import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css/Nbar.css';

class Nbar extends Component {
  render() {
    return (
      <nav id="nav1" className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/">Better Doctor</Link>
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
              <Link className="nav-link" to="/">Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Features</Link>
            </li>
          </ul>
          <li id="con" className="form-inline my-2 my-md-0">
            <Link to="/contactus">
              <button type="submit" className="btn btn-secondary mb-2">
                Contact us
              </button>
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}

export default Nbar
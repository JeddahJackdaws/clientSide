import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './components/css/theme.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchV: ''
    }
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }
  handleChange(event) {
    if (event.target.type === 'text') {
      this.setState({searchV: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
      this
      .props
      .history
      .push('/result/' + this.state.searchV)
    
  }
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
      <div className="html">
      <nav id="nav1" className="navbar navbar-expand-lg navbar-light ">
      <Link className="nav-link" to="/home">Better Doctor</Link>
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
            <Link className="nav-link" to="/Specialties">Specialties</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/hospitalCity">Hospitals</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
        </ul>
        <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="inputdata"
                            required
                            placeholder="Doctor name.."
                            value={this.state.searchV}
                            onChange={this.handleChange}
                            aria-label="Doctor name.."
                            aria-describedby="basic-addon2"/>
                          <div className="input-group-append">
                            <button className="btn btn-primary">Search</button>
                          </div>
                        </div>
        
                      </form>
                      <div className="col-md-1"></div>
        {
            !isAuthenticated() && (
                <Button
                  id="qsLoginBtn"
                  className="btn btn-primary"
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
                  className="btn btn-primary"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </Button>
              )
          }
       
      </div>
    </nav>
    </div>
    );
  }
}

export default App;



import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Footer from '../components/Footer.jsx';
import '../components/css/Home.css';
import dr from '../images/doctors-review.jpg';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchV: '',
      city: ''
    }
    this.handleClick = this
      .handleClick
      .bind(this)
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  login() {
    this
      .props
      .auth
      .login();
  }

  handleChange(event) {
    if (event.target.type === 'text') {
      this.setState({searchV: event.target.value});
    } else {
      this.setState({city: event.target.value});
    }
  }

  handleSubmit(event) {
    this
      .props
      .history
      .push('/results/' + this.state.searchV + '/' + this.state.city)
    event.preventDefault();
  }

  handleClick(e) {
    this
      .props
      .history
      .push(e.target.value)
  }
  render() {
    return (

      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h3>
                Looking for a dentist? Search here.
              </h3>
            </div>

          </div>
          <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputdata"
                    placeholder="Doctor name.."
                    value={this.state.searchV}
                    onChange={this.handleChange}
                    aria-label="Doctor name.."
                    aria-describedby="basic-addon2"/>
                  <div className="input-group-append">
                    <select
                      id="inputcity"
                      name='city'
                      className="form-control mb-2"
                      value={this.state.city}
                      onChange={this.handleChange}>
                      <option selected disabled>Choose here</option>
                      <option value="jeddah">Jeddah</option>
                      <option value="makkah">Makkah</option>
                      <option value="riyadh">Riyadh</option>
                    </select>
                    <button className="btn btn-outline-secondary">Search</button>
                  </div>
                </div>

              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <ButtonToolbar>
                <Button
                  bgStyle="primary"
                  bsSize="large"
                  value="/Specialties"
                  onClick={this.handleClick}>Specialties</Button>
                <Button
                  bgStyle="primary"
                  bsSize="large"
                  value="/hospitals"
                  onClick={this.handleClick}>Hospitals</Button>
              </ButtonToolbar>

            </div>
            <div className="col-md-4"></div>
          </div>
          <div id="row2" className="row mt-5">

            <div id="DIV_1">
              <div id="DIV_2">
                <h2 id="H2_3">
                  Doctors Reviews.
                </h2>
                <p id="P_4">
                  Better Doctor will provide you with multiple doctors reviews from all around
                  Saudi Arabia hospitals and clinics.
                </p>
              </div>
              <div id="DIV_5">
                <img src={dr} width="400" height="200" alt="Is he good or not?"/>
              </div>
            </div>

            <hr id="HR_1"/>

            <div id="DIV_11">
              <div id="DIV_21">
                <h2 id="H2_31">
                  Hospitals reviews.
                </h2>
                <p id="P_41">
                  Better Doctor uses Google maps reviews,social media,and forums to collect
                  reviews and put them in one place.
                </p>
              </div>
              <div id="DIV_51">
                <img src={dr} width="400" height="200" alt="Is he good or not?"/>
              </div>
            </div>
            <hr id="HR_1"/>
            <div id="DIV_1">
              <div id="DIV_2">
                <h2 id="H2_3">
                  Easy to use.
                </h2>
                <p id="P_4">
                  You can search with multiple ways such like Doctor specialty hospital specialty
                  ,cities and many other ways to make your Doctor/Hospital easy to find.
                </p>
              </div>
              <div id="DIV_5">
                <img src={dr} width="400" height="200" alt="Is he good or not?"/>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default Home;

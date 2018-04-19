import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  DropdownButton,
  MenuItem,
  href
} from 'react-bootstrap';
import Nbar from './Nbar.jsx';
import Reviews from './reviews.jsx';
import Footer from './Footer.jsx';
import './css/result2.css';
import x from '../images/x.png';

export default class Doctor extends Component {
  constructor(props) {
    var test;
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      Doctors: []
    };
  }

  componentDidMount() {
    const {match: {
        params
      }} = this.props;
    this.test = params.id;
    fetch('https://betterdoc.herokuapp.com/doctors/id/' + this.test)
      .then(res => res.json())
      .then((result) => {
        this.setState({isLoaded: true, Doctors: result});
      }, (error) => {
        this.setState({isLoaded: true, error});
      })
  }

  render() {
    const {error, isLoaded, Doctors} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div><Nbar/>
        <h2>loading</h2><Footer/></div>;
    } else {
      return (
        <div>
          <Nbar/>
          <div className="container">
            {Doctors.map(doctor => (
              <div>
                <div className="row mt-5">
                  <h1 className="text ">Name: {doctor.name}</h1>
                </div>
                <h1 className="text ">city: {doctor.city}</h1>

                <Image src={x} circle className="img"/>
                <Reviews id={this.test}/>
              </div>
            ))}
            <div className="row mt-5">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="panel panel-info">
                  <div className="panel-body">
                    <form
                      className="form-inline"
                      action="https://betterdoc.herokuapp.com/comments/new"
                      method="post">
                      <input type="hidden" name="reviewerId" value="15"/>
                      <input type="hidden" name="medicalId" value={this.test}/>
                      <textarea
                        name="reviewText"
                        placeholder="Write your comment here!"
                        className="pb-cmnt-textarea"></textarea>

                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your username"
                          name="reviewerName"
                          aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="submit">share</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      );
    }
  }
}
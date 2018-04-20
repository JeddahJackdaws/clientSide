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

export default class hospital extends Component {
  constructor(props) {
    var test;
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      hospitals: []
    };
  }

  componentDidMount() {
    const {match: {
        params
      }} = this.props;
    this.test = params.id;
    fetch('https://betterdoc.herokuapp.com/hospitals/Id/' + this.test)
      .then(res => res.json())
      .then((result) => {
        this.setState({isLoaded: true, hospitals: result});
      }, (error) => {
        this.setState({isLoaded: true, error});
      })
  }

  render() {
    const {error, isLoaded, hospitals} = this.state;
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
            {hospitals.map(hospital => (
              <div>
                <div className="row mt-5">
                  <h1 className="text ">Name: {hospital.name}</h1>
                </div>
                <h1 className="text ">city: {hospital.city}</h1>

                <Image src={x} circle className="img"/>
                <Reviews id={this.test}/>
              </div>
            ))}
            <div className="row mt-5">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="panel panel-info">
                  <div className="panel-body">
                    <textarea placeholder="Write your comment here!" className="pb-cmnt-textarea"></textarea>
                    <form className="form-inline">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your username"
                          aria-label="Your username"
                          aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="button">share</button>
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
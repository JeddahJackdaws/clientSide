import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer.jsx';
import Loading from './loading.jsx';
import './css/theme.css';
import './css/result.css';

export default class hospitals extends Component {
  constructor(props) {
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
    fetch('https://betterdoc.herokuapp.com/hospitals/city/'+params.city)
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
      return <div>
        <Loading/><Footer/></div>;
    } else {
      return (
        <div className="html">
        <div className="py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="">List of hospitals</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <span className="lead" contentEditable="true">we have {hospitals.length} results</span>
        </div>
      </div>
    </div>
  </div>
  <div className="py-2">
    <div className="container">
    {hospitals.map(hospital => (
            <div className="row mt-1">
        <div className="col-md-12">
          <div className="list-group">
            <Link to={"/hospital/" + hospital.Id} className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">#1</h5>
                <small>{hospital.rating}</small>
              </div>
              <p className="mb-1">{hospital.name}</p>
              <small>{hospital.city}</small>
            </Link>
          </div>
        </div>
      </div>
          ))}
    </div>
  </div>
          <Footer/>
        </div>
      );
    }
  }

}
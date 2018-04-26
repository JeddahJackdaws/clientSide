import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Footer from './Footer.jsx';
import './css/theme.css';
import j from '../images/j.jpg';
import m from '../images/m.jpg';
import r from '../images/r.jpg';


class HospitalCity extends Component {
    render(){
        return(
            <div className="html">
        <div className="py-5 text-center bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Please choose the city:</h1>
              <p className="lead">choose one of the following cities</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to="/hospitals/jeddah">
              <Image className="img-fluid d-block rounded-circle mx-auto" src={j}/>
              <p>Jeddah</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to="/hospitals/makkah">
              <Image className="img-fluid d-block rounded-circle mx-auto" src={m}/>
              <p>Makkah</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to="/hospitals/riyadh">
              <Image className="img-fluid d-block rounded-circle mx-auto" src={r}/>
              <p>Riyadh</p>
            </Link>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      </div>
        );
    }
}

export default HospitalCity



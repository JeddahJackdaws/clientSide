import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Nbar from './Nbar.jsx';
import Footer from './Footer.jsx';
import { Jumbotron, Grid, Row, Col, Image, Button,FormGroup,ControlLabel,FormControl,HelpBlock,DropdownButton,MenuItem,href } from 'react-bootstrap';
import x from '../images/x.png';
import './css/hosp.css';


export default class hosp extends Component{
    render(){
        return(
            <div className="img-with-text">
                <Nbar />
                <h2 className="H2_1">Hospitals:  </h2>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={x} circle className="profile-pic"/>
            <h5>Hospital 1</h5>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={x} circle className="profile-pic"/>
            <h5>Hospital 2</h5>
          </Col>
          </Row>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={x} circle className="profile-pic"/>
            <h5>Hospital 3</h5> 
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={x} circle className="profile-pic"/>
            <h5>Hospital 4</h5>
          </Col>
          </Row>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={x} circle className="profile-pic"/>
            <h5>Hospital 5</h5> 
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={x} circle className="profile-pic"/>
            <h5>Hospital 6</h5>
          </Col>
          </Row>

<nav aria-label="Page navigation example">
  <ul class="pagination low">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
                <Footer />
            </div>
        ); 
    }
}

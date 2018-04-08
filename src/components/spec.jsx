import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nbar from './Nbar.jsx';
import Footer from './Footer.jsx';
import { Jumbotron, Grid, Row, Col, Image, Button,FormGroup,ControlLabel,FormControl,HelpBlock,DropdownButton,MenuItem,href } from 'react-bootstrap';
import x from '../images/x.png';
import './css/spec.css';


export default class spec extends Component{

    render(){
        return(
            <div className="img-with-text">
            <Nbar />
            <h2 id="H2_1">Specialties:</h2>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
          <Link to="/specResults/عيون">
            <Image src={x} circle className="profile-pic" />
            <h5>Optometrist</h5></Link>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
          <Link to="/specResults/اسنان">
            <Image src={x} circle className="profile-pic" />
            <h5>Dentist</h5></Link>
          </Col>
          </Row>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
          <Link to="/specResults/جلدية">
            <Image src={x} circle className="profile-pic" />
            <h5>Dermatology</h5></Link>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
          <Link to="/specResults/طبيب عظام">
            <Image src={x} circle className="profile-pic" />
            <h5>Orthopedic</h5></Link>
          </Col>
          </Row>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
          <Link to="/specResults/طبيب اسرة">
            <Image src={x} circle className="profile-pic" />
            <h5>Family medicine</h5></Link>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
          <Link to="/specResults/أذن وأنف وحنجرة">
            <Image src={x} circle className="profile-pic" />
            <h5>ENT doctor</h5></Link>
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
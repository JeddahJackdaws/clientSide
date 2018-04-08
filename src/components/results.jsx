import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button,FormGroup,ControlLabel,FormControl,HelpBlock,DropdownButton,MenuItem,href } from 'react-bootstrap';
import Nbar from './Nbar.jsx';
import Footer from './Footer.jsx';
import result from './css/result.css';
class results extends Component{
    render(){
        return(
            <div>

            <Nbar />
            <h2 class="let">Search result for:  </h2><input type="text" placeholder="X" class="input let"/>
            <div class="dropdown show high">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Rating</a>
    <a class="dropdown-item" href="#">City</a>
    <a class="dropdown-item" href="#">Specialist</a>
  </div>
</div>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/x.png" circle className="profile-pic"/>
            <h5>Result 1</h5> 
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/pexels-ph.jpeg" circle className="profile-pic"/>
            <h5>Result 2</h5>
          </Col>
          </Row>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/x.png" circle className="profile-pic"/> 
            <h5>Result 3</h5>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/pexels-ph.jpeg" circle className="profile-pic"/>
            <h5>Result 4</h5>
          </Col>
          </Row>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/x.png" circle className="profile-pic"/> 
            <h5>Result 5</h5>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/pexels-ph.jpeg" circle className="profile-pic"/>
            <h5>Result 6</h5>
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
export default results
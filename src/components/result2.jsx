import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button,FormGroup,ControlLabel,FormControl,HelpBlock,DropdownButton,MenuItem,href } from 'react-bootstrap';
import Nbar from './Nbar.jsx';
import Footer from './Footer.jsx';
import './css/result2.css';
import x from '../images/x.png';

export default class result2 extends Component{
    render(){
        return(
            <div>
                <Nbar />
                
<div className="solid">
<h1 className="text ">Doctor:</h1>
<h1 className="text ">Specialty:</h1>
<h1 className="text ">Works in:</h1>

</div>
<Image src={x} circle className="img"/>
<div id="list-example" class="list-group">
  <ul className="low1">
  <li>
  <a class="list-group-item list-group-item-action" href="#list-item-1">Review </a>
  </li>
  <li>
  <a class="list-group-item list-group-item-action" href="#list-item-1">Review</a>
  </li>
    <li>
  <a class="list-group-item list-group-item-action" href="#list-item-1">Review</a>
  </li>
    <li>
  <a class="list-group-item list-group-item-action" href="#list-item-1">Review</a>
  </li>
  </ul>
</div>



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
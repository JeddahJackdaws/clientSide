import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nbar from './Nbar.jsx';
import Footer from './Footer.jsx';
import { Jumbotron, Grid, Row, Col, Image, Button,FormGroup,ControlLabel,FormControl,HelpBlock,DropdownButton,MenuItem,href } from 'react-bootstrap';


export default class contactus extends Component{
    render(){
        return(
            <div>
                <Nbar />
                <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Subject</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Be nice. .</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-secondary mb-2">Submit</button>
</form>                <Footer />
            </div>
        ); 
    }
}

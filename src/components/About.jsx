import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button,FormGroup,ControlLabel,FormControl,HelpBlock,DropdownButton,MenuItem,href } from 'react-bootstrap';

import Nbar from './Nbar.jsx';
import Footer from './Footer.jsx';

class About extends Component{
    render(){
        return(
            <div>
            <Nbar />
            <Footer />
        </div>
        );
    }
}
export default About
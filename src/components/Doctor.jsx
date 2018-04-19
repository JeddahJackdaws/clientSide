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
import Footer from './Footer.jsx';
import './css/result2.css';
import x from '../images/x.png';

export default class Doctor extends Component {
  constructor(props) {
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
    var test = params.id;
    fetch('https://betterdoc.herokuapp.com/doctors/id/' + test)
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
          {Doctors.map(Doctor => (
          <div className="container">
            <div className="row mt-5">
              <h1 className="text ">Name: {Doctor.name}</h1>
            </div>
              <h1 className="text ">Specialty: {Doctor.speciality}</h1>
            
          <Image src={x} circle className="img"/>
          <div id="list-example" class="list-group">
            <ul className="low1">
              <li>
                <a class="list-group-item list-group-item-action">Review
                </a>
              </li>
            </ul>
          </div>
          
          </div>
        ))}
        <Footer/>
        </div>
      );
    }
  }
}


{/* <div>
<Nbar/>
<div className="container">
  <div className="row mt-5">
    {Doctors.map(Doctor => (
      <h3 className="text ">Name: {Doctor.name}</h3> 
        <h3 className="text "> Specialty : {Doctor.speciality} </h3>
          <Image src={x} circle className="img"/> 
            <div id="list-example" class="list-group"></div> 
              <div className = "row mt-5"> 
                <ul className="low1">
                  <li>
                    <a class="list-group-item list-group-item-action">Review</a>
                  </li>
                </ul> 
              </div>
    ))}
  </div>
</div>
< Footer/>
</div> */}

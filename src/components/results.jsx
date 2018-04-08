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
import result from './css/result.css';
import x from '../images/x.png';
class results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      Doctors: []
    };
  }

  componentDidMount() {
    fetch("https://betterdoc.herokuapp.com/doctors/spec/%D8%B9%D9%8A%D9%88%D9%86")
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
      return <div><Nbar/><h2>loading</h2><Footer/></div>;
    } else {
      return (
        <div className="img-with-text">
          <Nbar/>
          <h2 id="H2_1">Doctors:</h2>
          {Doctors.map(Doctor => (
            <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Link to="/results">
                <Image src={x} circle className="profile-pic"/>
                <h5>{Doctor.name}</h5>
              </Link>
            </Col>
          </Row>
          ))}
          <Footer/>
        </div>
      );
    }
  }

}

export default results
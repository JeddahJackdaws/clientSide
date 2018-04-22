import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer.jsx';
import {Row, Col, Image} from 'react-bootstrap';
import x from '../images/x.png';
import './css/hospitals.css';

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
    fetch('https://betterdoc.herokuapp.com/hospitals')
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
        <h2>loading</h2><Footer/></div>;
    } else {
      return (
        <div className="img-with-text">
          <h2 id="H2_1">hospitals:</h2>
          {hospitals.map(hospital => (
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Link to={"/hospital/" + hospital.Id}>
                  <Image src={x} circle className="profile-pic"/>
                  <h5>{hospital.name}</h5>
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
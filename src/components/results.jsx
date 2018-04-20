import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image} from 'react-bootstrap';
import Footer from './Footer.jsx';
import './css/results.css';
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
    const {match: {
        params
      }} = this.props;
      console.log(params.name+'/'+params.city)
    fetch('https://betterdoc.herokuapp.com/search/' + params.name + '/' + params.city)
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
      return <div>
        <h2>loading</h2><Footer/></div>;
    } else {
      return (
        <div className="img-with-text">
          <h2 id="H2_1">Doctors:</h2>
          {Doctors.map(Doctor => (
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Link to={"/Doctor/" + Doctor.id}>
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
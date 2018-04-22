import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import Reviews from './reviews.jsx';
import Footer from './Footer.jsx';
import './css/result2.css';
import x from '../images/x.png';

export default class hospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      mid:0,
      hospitals: []
    };
  }

  componentDidMount() {
    const {match: {
        params
      }} = this.props;
    fetch('https://betterdoc.herokuapp.com/hospitals/Id/' + params.id)
      .then(res => res.json())
      .then((result) => {
        this.setState({isLoaded: true, mid: params.id, hospitals: result});
      }, (error) => {
        this.setState({isLoaded: true, error});
      })
  }

  render() {
    const {isAuthenticated} = this.props.auth;
    const {error, isLoaded, mid, hospitals} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>
        <h2>loading</h2><Footer/></div>;
    } else {
      return (
        <div>
          <div className="container">
            {hospitals.map(hospital => (
              <div>
                <div className="row mt-5">
                  <h1 className="text ">Name: {hospital.name}</h1>
                </div>
                <h1 className="text ">city: {hospital.city}</h1>

                <Image src={x} circle className="img"/>
                <Reviews id={mid}/>
              </div>
            ))}
            {isAuthenticated() && (
              
            <div className="row mt-5">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="panel panel-info">
                  <div className="panel-body">
                    <form
                      className="form-inline"
                      action="https://betterdoc.herokuapp.com/comments/new"
                      method="post">
                      <input type="hidden" name="reviewerId" value="15"/>
                      <input type="hidden" name="medicalId" value={mid}/>
                      <textarea
                        name="reviewText"
                        placeholder="Write your comment here!"
                        className="pb-cmnt-textarea"></textarea>

                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your username"
                          name="reviewerName"
                          aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="submit">share</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            )
}
            {!isAuthenticated() && (
              <div className="row mt-5">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <h3>Please login to review!</h3>
                  </div>
                  </div>
            )
}

          </div>
          <Footer/>
        </div>
      );
    }
  }
}
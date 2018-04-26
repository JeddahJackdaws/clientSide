import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer.jsx';
import Loading from './loading.jsx';
class specResults extends Component {
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
      var test = params.spec;
    
    fetch('https://betterdoc.herokuapp.com/doctors/spec/' + test)
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
        <Loading/><Footer/></div>;
    } else {
      return (
        
        <div className="html">
        <div className="py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="">we have {Doctors.length} results.</h1>
        </div>
      </div>  
    </div>
  </div>
  <div className="py-2">
    <div className="container">
    {Doctors.map(doctor => (
            <div className="row mt-1">
        <div className="col-md-12">
          <div className="list-group">
            <Link to={"/doctor/" + doctor.id} className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">#{doctor.id}</h5>
              </div>
              <p className="mb-1">{doctor.name}</p>
              <small>{doctor.speciality}</small>
            </Link>
          </div>
        </div>
      </div>
          ))}
    </div>
  </div>
          <Footer/>
        </div>
      );
    }
  }

}

export default specResults
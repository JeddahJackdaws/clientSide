import React, {Component} from 'react';
import Reviews from './reviews.jsx';
import MapViewer from './mapViewer.jsx';
import Footer from './Footer.jsx';
import Loading from './loading.jsx';
import './css/theme.css';
import './css/hospital.css';
export default class hospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      mid: 0,
      reviewtxt: '',
      hospitals: []
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }
  handleChange(event) {
    this.setState({reviewtxt: event.target.value});
  }

  handleSubmit(event) {
    var formdata = {
      "reviewerId": this.state.profile.nickname+this.state.mid,
      "medicalId": this.state.mid,
      "reviewerName": this.state.profile.name,
      "reviewText": this.state.reviewtxt
    }
    var formBody = [];
    for (var property in formdata) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(formdata[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch('https://betterdoc.herokuapp.com/comments/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
    event.preventDefault();
    window
      .location
      .reload();
  }
  componentWillMount() {
    this.setState({profile: {}});
    const {userProfile, getProfile} = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({profile});
      });
    } else {
      this.setState({profile: userProfile});
    }
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
        <Loading/><Footer/></div>;
    } else {

      return (
        <div>
          <div className="container">
            {hospitals.map(hospital => (
              <div>
                <div className="py-3 border border-secondary">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h1 className="text-left">Name: {hospital.name}</h1>
                        <div className="row">
                          <div className="col-md-12">
                            <h1 className="text-left">Rating: {hospital.rating}</h1>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <h1 className="text-left">City: {hospital.city}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                          <div id="row11" className="row">
                          <div>
                          <MapViewer lat={hospital.location.lat} lng={hospital.location.lng} name={hospital.name}/>
                          </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="text-left">Reviews:</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <Reviews id={mid}/>
              </div>
            ))}
            {isAuthenticated() && (

              <div className="row mt-5">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="panel panel-info">
                    <div className="panel-body">
                      <form onSubmit={this.handleSubmit} className="form-group">
                        <div className="form-group">
                          <label for="exampleFormControlTextarea1">Your review</label>
                          <textarea
                            className="form-control"
                            name="reviewText"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="Write your comment here!"
                            rows="3"
                            required></textarea>
                        </div>
                        <div className="input-group mb-3">
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
              <div className="container">
                <div className="row mt-5">
                  <div className="col-md"></div>
                  <div className="col-md">
                    <h3>Please login to review!</h3>
                  </div>
                  <div className="col-md"></div>
                </div>
                <div className="row mt-5"></div>
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
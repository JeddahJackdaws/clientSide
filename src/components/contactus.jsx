import React, {Component} from 'react';
import Footer from './Footer.jsx';

export default class contactus extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Subject</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Be nice. .</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-secondary mb-2">Submit</button>
        </form>
        <Footer/>
      </div>
    );
  }
}

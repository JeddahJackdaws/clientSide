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

export default class reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      mid: "",
      comments: []
    };
  }

  componentDidMount() {

    fetch('https://betterdoc.herokuapp.com/comments/mid/' + this.props.id)
      .then(res => res.json())
      .then((result) => {
        this.setState({isLoaded: true, comments: result});
      }, (error) => {
        this.setState({isLoaded: true, error});
      })
  }

  render() {
    const {error, isLoaded, comments} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <h2>loading</h2>;
    } else {
      return (
        <div id="list-example" class="list-group">
          <ul className="low1">
            {comments.map(comment => (
              <li>
                <div className="list-group-item list-group-item-action">
                  <div className="row" id="head">
                    <div className="commentHead">
                      <strong>{comment.reviewerName+" "}</strong>
                      <span className="text-muted">commented:</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="commentBody">
                      {comment.reviewText}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
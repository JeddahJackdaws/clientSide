import React, {Component} from 'react';

export default class reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      comments: []
    };
  }

  dateConv(input){
    var dt = new Date(input*1000);
    return(dt.toDateString())
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
        <div id="list-example" className="list-group">
          <ul className="low1">
            {comments.map(comment => (
              <div className="row mt-1">
        <div className="col-md-12">
          <div className="list-group">
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1"><strong>{comment.reviewerName}</strong> Commented:</h5>
              </div>
              <p className="mb-1">{comment.reviewText}</p>
              <small>{this.dateConv(comment.reviewDate)}</small>
            </div>
          </div>
        </div>
      </div>
            ))}
          </ul>
        </div>
      );
    }
  }
}
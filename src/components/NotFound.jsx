import React, {Component} from 'react';
import Footer from './Footer.jsx';
import {Link} from 'react-router-dom';
import './css/NotFound.css'
class NotFound extends Component {
    render() {
        return (
            <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error">
                            <h1>404</h1>
                            <h2>Not Found</h2>
                            <div>
                                Sorry, Requested page not found!
                            </div>
                            <div className="errorText">
                            <Link className="link" to="/home">Home
                          </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        );
    }
}
export default NotFound
import React, {Component} from 'react';
import Footer from './Footer.jsx';
import './css/theme.css';
import ab from '../images/ab.jpg';

class About extends Component {

    render() {
        const pStyle = {
            backgroundImage: `url(${ab})`
        };
        return (
            <div className="html">
                    <div className="py-5 text-white" style={pStyle}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="lead text-dark">Better Doctor is a web application that has
                                        information and reviews about doctors and hospitals that is gathered from all
                                        across the internet using web scraping and api.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
            </div>
        );
    }
}
export default About
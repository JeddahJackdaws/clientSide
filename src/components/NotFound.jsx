import React, {Component} from 'react';

import Nbar from './Nbar.jsx';
import Footer from './Footer.jsx';

class NotFound extends Component {
    render() {
        return (
            <div>

                <Nbar/>
                <h1>
                    Not Found
                </h1>
                <Footer/>
            </div>
        );
    }
}
export default NotFound
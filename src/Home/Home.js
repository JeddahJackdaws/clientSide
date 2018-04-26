import React, {Component} from 'react';
import {Image, Button} from 'react-bootstrap';
import Footer from '../components/Footer.jsx';
import '../components/css/theme.css';
import frontpage from '../images/frontpage.jpg';
import f1 from '../images/f1.jpg';
import f2 from '../images/f2.jpg';
import f3 from '../images/f3.jpg';
import f4 from '../images/f4.jpg';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchV: ''
        }
        this.handleClick = this
            .handleClick
            .bind(this)
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(event) {
        if (event.target.type === 'text') {
            this.setState({searchV: event.target.value});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this
            .props
            .history
            .push('/result/' + this.state.searchV)

    }

    handleClick(e) {
        this
            .props
            .history
            .push(e.target.value)
    }
    render() {
        const pStyle = {
            backgroundImage: `url(${frontpage})`
        };
        return (

            <div className="html">
                <div className="py-5 text-center" style={pStyle}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-3 mb-4 text-light">
                                    Get better medical care
                                </h1>
                                <p className="lead mb-5">
                                    You can search and compare reviews between multiple medical providers.
                                </p>

                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputdata"
                                                    required
                                                    placeholder="Doctor name.."
                                                    value={this.state.searchV}
                                                    onChange={this.handleChange}
                                                    aria-label="Doctor name.."
                                                    aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary">
                                                        Search
                                                    </button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-12">
                                        <div className="btn-group">
                                            <Button
                                                className="btn btn-lg btn-light"
                                                value="/Specialties"
                                                onClick={this.handleClick}>
                                                Specialties
                                            </Button>
                                            <Button
                                                className="btn btn-lg btn-light"
                                                value="/hospitalcity"
                                                onClick={this.handleClick}>
                                                Hospitals
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 text-center bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1 className="text-primary">
                                            Why Better Doctor
                                        </h1>
                                        <p className="text-dark">
                                            Better Doctor will provide you with multiple features including:
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-7">
                                <h2 className="text-primary">
                                    Doctors Information
                                </h2>
                                <p className="">
                                    Better Doctor will provide you with multiple doctors information from all around
                                    Saudi Arabia hospitals and clinics.
                                </p>
                            </div>
                            <div className="col-md-5 align-self-center">
                                <Image className="img-fluid d-block w-100 img-thumbnail" src={f1}/>
                            </div >
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <Image className="img-fluid d-block mb-4 w-100 img-thumbnail" src={f2}/>
                            </div >
                            <div className="col-md-7">
                                <h2 className="text-primary pt-3">
                                    Hospitals Information
                                </h2>
                                <p className="">
                                    Better Doctor will provide you with multiple hospitals information from all
                                    around Saudi Arabia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    < div className="container">
                        <div className="row mb-5">
                            <div className="col-md-7">
                                <h2 className="text-primary">
                                    Hospitals reviews
                                </h2>
                                <p className="">
                                    Better Doctor uses Google maps reviews to collect reviews and put them in one
                                    place.
                                </p>
                            </div>
                            <div className="col-md-5 align-self-center">
                                <Image className="img-fluid d-block w-100 img-thumbnail" src={f3}/>
                            </div >
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <Image className="img-fluid d-block mb-4 w-100 img-thumbnail" src={f4}/>
                            </div >
                            <div className="col-md-7">
                                <h2 className="text-primary pt-3">
                                    Easy to use
                                </h2>
                                <p className="">
                                    You can search with multiple ways such like Doctor specialty, hospital location,
                                    cities and many other ways to make your Doctor / Hospital easy to find.
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

export default Home;
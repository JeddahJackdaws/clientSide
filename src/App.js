import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import hospitals from './components/hospitals.jsx';
import spec from './components/spec.jsx';
import results from './components/results.jsx';
import contactus from './components/contactus.jsx';
import hospital from './components/hospital.jsx';
import Doctor from './components/Doctor.jsx';
import specResults from './components/specResults.jsx';
class App extends Component {
    render() {
        return (
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
              <Route exact path="/hospitals" component={hospitals}/>
              <Route exact path="/hospital/:id" component={hospital}/>
              <Route exact path="/specs" component={spec}/>
              <Route exact path="/specResults/:spec" component={specResults}/>
              <Route exact path="/results/:name/:city" component={results}/>
              <Route exact path="/contactus" component={contactus}/>
              <Route exact path="/doctor/:id" component={Doctor}/>
              <Route component={NotFound}/>
              </Switch>
            </div>
          </Router>
        );
    }
}

export default App;
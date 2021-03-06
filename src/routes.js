import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Hospitals from './components/hospitals.jsx';
import HospitalCity from './components/hospitalCity.jsx';
import Hospital from './components/hospital.jsx';
import Specialties from './components/specialties.jsx';
import SpecResults from './components/specResults.jsx';
import Doctor from './components/Doctor.jsx';
import Doctors from './components/Doctors.jsx';
import Results2 from './components/results2.jsx';
import About from './components/About.jsx';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/hospitals/:city" render={(props) => <Hospitals auth={auth} {...props} />} />
          <Route path="/hospitalcity" render={(props) => <HospitalCity auth={auth} {...props} />} />
          <Route path="/hospital/:id" render={(props) => <Hospital auth={auth} {...props} />} />
          <Route path="/Specialties" render={(props) => <Specialties auth={auth} {...props} />} />
          <Route path="/doctors/" render={(props) => <Doctors auth={auth} {...props} />} />
          <Route path="/specResults/:spec" render={(props) => <SpecResults auth={auth} {...props} />} />
          <Route path="/doctor/:id" render={(props) => <Doctor auth={auth} {...props} />} />
          <Route path="/about" render={(props) => <About auth={auth} {...props} />} />
          <Route path="/result/:name/" render={(props) => <Results2 auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}

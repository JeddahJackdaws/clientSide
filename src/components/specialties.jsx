import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer.jsx';
import {Image} from 'react-bootstrap';
import x from '../images/x.png';
import data from './specialties.json';
import './css/theme.css';

export default class specialties extends Component {

  render() {
    return (

      <div className="html">
        <div className="py-5 text-center bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Please choose the speciality:</h1>
              <p className="lead">choose one of the following specialties</p>
            </div>
          </div>
          
          {
            <div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[0].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[0].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[1].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[1].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[2].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[2].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[3].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[3].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[4].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[4].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[5].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[5].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[6].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[6].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[7].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[7].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[8].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[8].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[9].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[9].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[10].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[10].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[11].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[11].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[12].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[12].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[13].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[13].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[14].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[14].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[15].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[15].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[16].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[16].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[17].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[17].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[18].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[18].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[19].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[19].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[20].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[20].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[21].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[21].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[22].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[22].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[23].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[23].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[24].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[24].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[25].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[25].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[26].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[26].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[27].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[27].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[28].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[28].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[29].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[29].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[30].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[30].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[31].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[31].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[32].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[32].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[33].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[33].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[34].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[34].name}</p>
            </Link>
            </div>
            <div className="col-md-4 p-4">
            <Link to={data[35].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[35].name}</p>
            </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
            <Link to={data[36].link}>
              <Image className="img-fluid d-block rounded-circle mx-auto" src={x}/>
              <p>{data[36].name}</p>
            </Link>
            </div>
          </div>
          </div>
        }
        </div>
        <Footer/>
      </div>
      </div>
    );
  }
}
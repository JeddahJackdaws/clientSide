import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Loading from './loading.jsx';
import './css/mapViewer.css';

const style = {
  width: '100%',
  height: '100%'
}

const LoadingContainer = (props) => (
  <Loading/>
)

class googlemap extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
        };
      }

      state = {

  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

    render() {
          return (
            <div>
              <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                  lat: this.props.lat,
                  lng: this.props.lng }}
                zoom={11}
                onClick={this.onMapClicked}>
                      <Marker
                      title={this.props.name}
                      name={this.props.name}
                      position={{lat: this.props.lat, lng: this.props.lng}}
                      onClick={this.onMarkerClick}/>
                <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}>
                        <div>
                          <h6><a href={this.state.selectedPlace.url} id="textinfo" target="_blank">{this.state.selectedPlace.name}</a></h6>
                        </div>
                    </InfoWindow>
              </Map>         
            </div>        
        );
      
    }
  }

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDwuqhi-51gdLpnq7vfYqT71Q9wLfdw0sk"),
  LoadingContainer: LoadingContainer
})(googlemap)
import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import Marker from './marker';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.apikey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

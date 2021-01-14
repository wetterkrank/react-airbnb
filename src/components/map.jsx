import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import Marker from './marker';

class Map extends Component {
  render() {
    const {apikey, marker, defaults, center, zoom} = this.props;
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apikey }}
          defaultCenter={defaults.center}
          defaultZoom={defaults.zoom}
          center={center}
          zoom={zoom}
        >
          <Marker coords={marker}
            // lat={center.lat}
            // lng={center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

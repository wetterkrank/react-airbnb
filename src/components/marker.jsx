import React, { Component } from 'react';

class Marker extends Component {
  render() {
    if (!this.props.coords) return null;
    return <div className="marker" />;
  }
}

export default Marker;

import { Component } from 'react';

import FlatList from './components/flat_list';
import Map from './components/map';

import './App.scss';

import flats from './data/flats';
const MAPS_KEY = process.env.REACT_APP_MAPS_KEY;
const mapDefaults = {
  center: {
    lat: 48.8588377,
    lng: 2.2770202
  },
  zoom: 11
};


class App extends Component {
  constructor(props) {
    super(props);
    const cards = flats.map((item, i) => ({id: i, ...item}));
    this.state = {
      cards: cards,
      selectedId: null
    }
  }

  selectCard = (cardId) => {
    if (cardId !== this.state.selectedId) {
      this.setState({selectedId: cardId});
    }
  }
  
  render () {
    const {cards, selectedId} = this.state;
    const center = (selectedId !== null) ? { lat: cards[selectedId].lat, lng: cards[selectedId].lng } : undefined;
    const zoom = (selectedId !== null) ? 13 : mapDefaults.zoom;
    return (
      <div className="App">
        <div className="flat-list">
          <FlatList cards={cards} selectedId={selectedId} selectFn = {this.selectCard} />
        </div>
        <div className="map-container">
          <Map apikey={MAPS_KEY} defaults={mapDefaults} center={center} zoom={zoom} marker={center} />
        </div>
      </div>
    );
  }
}

export default App;

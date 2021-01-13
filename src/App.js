import { Component } from 'react';

import FlatList from './components/flat_list';
import Map from './components/map';

import './App.scss';

import flats from './data/flats';
const MAPS_KEY = process.env.REACT_APP_MAPS_KEY;


class App extends Component {
  constructor(props) {
    super(props);
    const cards = flats.map((item, i) => ({...item, key: i}));
    this.state = {
      cards: cards,
      selection: null
    }
  }

  render () {
    return (
      <div className="App">
        <div className="flat-list">
          <FlatList cards={this.state.cards} />
        </div>
        <div className="map-container">
          <Map apikey={MAPS_KEY}/>
        </div>
      </div>
    );
  }

}

export default App;

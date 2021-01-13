import React, { Component } from 'react';
import Card from './card';

class FlatList extends Component {
  render() {
    if (!this.props.cards) return null;
    return this.props.cards.map(card => <Card {...card} />);
  }
}

export default FlatList;

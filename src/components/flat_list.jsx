import React, { Component } from 'react';
import Card from './card';

class FlatList extends Component {
  render() {
    if (!this.props.cards) return null;

    return this.props.cards.map((card) => {
      const active = (this.props.selectedId === card.id);
      const allprops = {key: card.id, active: active, selectFn: this.props.selectFn, ...card};
      return <Card {...allprops} />
    });
  }
}

export default FlatList;

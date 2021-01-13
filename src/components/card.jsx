import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {name, imageUrl, price, priceCurrency} = this.props;
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)), url(${imageUrl})` }}>
        <div className="card-category">{`${price} ${priceCurrency}`}</div>
        <h2 className="card-description">{name}</h2>
      </div>
    );
  }
}

export default Card;

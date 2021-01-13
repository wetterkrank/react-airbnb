/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React, { Component } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  handleClick = () => {
    this.setState({ active: !this.state.active });
  }

  render() {
    const {name, imageUrl, price, priceCurrency} = this.props;
    const selected = this.state.active ? "active" : "";
    return (
      <div className={`card ${selected}`}
           style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)), url(${imageUrl})` }}
           onClick={this.handleClick}>
        <div className="card-category">{`${price} ${priceCurrency}`}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Card;

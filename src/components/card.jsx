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

  shouldComponentUpdate(nextProps) {
    return nextProps.active !== this.props.active;
  }

  handleClick = (event) => {
    this.props.selectFn(this.props.id);
    event.preventDefault();
  }

  render() {
    const {name, imageUrl, price, priceCurrency, active} = this.props;
    return (
      <div className={`card ${active ? "active" : ""}`}
           style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)), url(${imageUrl})` }}
           onClick={this.handleClick}>
        <div className="card-category">{`${price} ${priceCurrency}`}</div>
        <div className="card-description"><h2>{name}</h2></div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Card;

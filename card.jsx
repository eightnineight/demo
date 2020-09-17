import React from "react";
import glob from "../globals.js";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.card_ref = React.createRef();

    this.onscroll = this.onscroll.bind(this);
    glob.newspaper.subscribe("APP_SCROLL", this.onscroll);
  }

  onscroll(event) {
    if (this.card_ref.current) {
      let card = this.card_ref.current;
      const rect = card.getBoundingClientRect();
      if(rect.top < (window.innerHeight*4/5)) {
        card.classList.add("card-animation-start");
      }
    }
  }

  render() {
    return (
      <div ref={this.card_ref} className="card">
        <img src={this.props.image}></img>
        <div className="card__text">{this.props.children}</div>
      </div>
    );
  }
}

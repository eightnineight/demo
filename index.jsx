import React from "react";
import ReactDOM from "react-dom";
import Card from "./component/card.jsx";
require("./style.scss");
import { Newspaper } from "@eightnineight/newspaper"
import glob from './globals.js'

const cards = [
  {
    url:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/16/online-clothes-shops-hero.jpg",
    text: "SPRING",
    card_animation: "card-animation-top",
  },
  {
    url: "https://img.ruten.com.tw/s2/6/68/44/21405113276484_530.jpg",
    text: "SUMMER",
    card_animation: "card-animation-left",
  },
  {
    url:
      "https://countrhq.com/wp-content/uploads/2018/10/fall.jpg",
    text: "FALL",
    card_animation: "card-animation-right",
  },
  {
    url:
      "https://cdn.mos.cms.futurecdn.net/2LVWjEV65antgXRgEAXJRb-1200-80.jpg",
    text: "WINTER",
    card_animation: "card-animation-bottom",
  },
  {
    url:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/16/online-clothes-shops-hero.jpg",
    text: "SPRING",
    card_animation: "card-animation-top",
  },
  {
    url: "https://img.ruten.com.tw/s2/6/68/44/21405113276484_530.jpg",
    text: "SUMMER",
    card_animation: "card-animation-left",
  },
  {
    url:
      "https://countrhq.com/wp-content/uploads/2018/10/fall.jpg",
    text: "FALL",
    card_animation: "card-animation-right",
  },
  {
    url:
      "https://cdn.mos.cms.futurecdn.net/2LVWjEV65antgXRgEAXJRb-1200-80.jpg",
    text: "WINTER",
    card_animation: "card-animation-bottom",
  },
];

class App extends React.Component {
  constructor() {
    super();

    this.reducer = this.reducer.bind(this);
    glob.newspaper = new Newspaper(this.reducer);

    this.onscroll = this.onscroll.bind(this);
    window.onscroll = this.onscroll;
    window.onload = this.onscroll;
  }

  reducer(event) {
    switch(event.type) {
        case 'APP_SCROLL':
            glob.newspaper.publish(event);
    }
  }

  onscroll(e) {
    glob.newspaper.interview({type:'APP_SCROLL', pos:(window.pageYOffset+window.innerHeight)});
  }

  render() {
    const data = cards.map((item, idx) => {
      return (
        <Card key={idx} image={item.url} card_animation={item.card_animation}>
          {item.text}
        </Card>
      );
    });
    return <div className="app">{data}</div>;
  }
}

ReactDOM.render(<App></App>, document.querySelector("#app"));

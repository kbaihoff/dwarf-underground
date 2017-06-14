import React from 'react';
import './OtherArticles.css';

class OtherArticles extends React.Component { 
  constructor() {
    super()
    this.state = {
      others: [
        {s: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif", a: "orc", para: "Single Orcs in Indianapolis"},
        {s: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg", a: "mountain", para: "You won't believe what's under this mountain"},
        {s: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg", a: "gold", para: "Mine 20% more gold with One Weird Trick"},
        {s: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg", a: "hobbit", para: "Surprise for Indiana Hobbits born before 1999"}
      ],
    }
  }
  
  render() {
    return (
      <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        {this.state.others.map((article, i) => {
          return (<div key={i} className="small-6 medium-3 columns other-article">
            <a href="#">
              <img src={article.s}/>
              <p>{article.para}</p>
            </a>
          </div>)
        })}
      </div>
    );
  }
}

export default OtherArticles;
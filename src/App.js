import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';
import Advertisement from './Advertisement';
import OtherArticles from './OtherArticles';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Article />
          <Advertisement />
          <OtherArticles />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

// 1. Header
//   2. Header Clearfix
// 3. Article
//   4. Article Info
//   5. Article Body
//   6. Article Links
// 7. Advertisements
//   8. Advertisement Text
// 9. Other Articles
// 10. Footer
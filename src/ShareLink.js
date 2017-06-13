import React from 'react';
import './ShareLink.css';

class ShareLink extends React.Component {
  render() {
    return (
      <a className="article-link" href="#">
        <i className="fa fa-share"></i>
        <span className="article-link-text">Share Post</span>
      </a>
    )
  }
}

export default ShareLink
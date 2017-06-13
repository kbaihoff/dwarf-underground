import React from 'react';
import './ArticleLinks.css';

class ArticleLinks extends React.Component {
  clickComment(ev) {
    console.log(ev.target.parentElement)
  }
  
  render() {
    return (
      <div className="article-links">
        <a className="article-link" onClick={this.clickComment.bind(this)}>
          <i className="fa fa-comments-o"></i>
          <span className="article-link-text">Comments</span>
        </a>
        <a className="article-link" href="#">
          <i className="fa fa-share"></i>
          <span className="article-link-text">Share Post</span>
        </a>
      </div>
    )
  }
}

export default ArticleLinks
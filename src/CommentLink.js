import React from 'react';
import './CommentLink.css';

class CommentLink extends React.Component {
  render() {
    return (
      <a className="article-link" href="#">
        <i className="fa fa-comments-o"></i>
        <span className="article-link-text">Comments</span>
      </a>
    )
  }
}

export default CommentLink
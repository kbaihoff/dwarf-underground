import React from 'react';
import './ArticleLinks.css';

class ArticleLinks extends React.Component {
  clickComment(ev) {
    const commenting = ev.target.closest('.article-links').nextElementSibling
    const comment_list = ev.target.closest('.article-links').nextElementSibling.nextElementSibling
    if (commenting.style.display !== 'flex') {
      commenting.style.display = 'flex'
      comment_list.style.display = 'flex'
    }
    else {
      commenting.style.display = 'none'
      comment_list.style.display = 'none'
    }
  }
  
  render() {
    return (
      <div>
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
        <div className="commenting">
          <input type="text" className="comment-field" placeholder="Comment here..." />
          <button type="submit" className="comment-button">Sayeth</button>
        </div>
        <div className="comment-list">
          <ul className="no-bullet">
            <li>Test</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ArticleLinks
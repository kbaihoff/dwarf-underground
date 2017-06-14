import React from 'react';
import './ArticleLinks.css';

class ArticleLinks extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: [],
    }
  }
  
  clickComment(ev) {
    const commenting = ev.target.closest('.article-links').nextElementSibling
    const comment_list = ev.target.closest('.article-links').nextElementSibling.nextElementSibling
    if (commenting.style.display !== 'flex') {
      commenting.style.display = 'flex'
      comment_list.style.display = 'block'
    }
    else {
      commenting.style.display = 'none'
      comment_list.style.display = 'none'
    }
  }

  handleSubmit(ev) {
    ev.preventDefault()
    if (this.commentField.value.length <= 0) {
      return
    }
    const comments = [...this.state.comments]
    comments.push(this.commentField.value)
    this.setState({ comments: comments })
    ev.currentTarget.reset()
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
        <form className="commenting" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className="comment-field" ref={(input) => this.commentField = input} placeholder="Comment here..." />
          <button type="submit" className="comment-button">Sayeth</button>
        </form>
        <div className="comment-list">
          <h4>Comments:</h4>
          <ul className="no-bullet">
            {this.state.comments.map((comment, i) => <li key={i}>{comment}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default ArticleLinks
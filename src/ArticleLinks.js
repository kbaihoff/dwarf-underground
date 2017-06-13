import React from 'react';
import './ArticleLinks.css';
import CommentLink from './CommentLink'
import ShareLink from './ShareLink'

class ArticleLinks extends React.Component {
  render() {
    return (
      <div className="article-links">
        <CommentLink />
        <ShareLink />
      </div>
    )
  }
}

export default ArticleLinks
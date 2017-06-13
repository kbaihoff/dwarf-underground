import React from 'react';
import './Article.css';
import ArticleInfo from './ArticleInfo';
import ArticleBody from './ArticleBody';
import ArticleLinks from './ArticleLinks';

class Article extends React.Component {
  render() {
    return (
      <div className="large-8 medium-12 columns article">
        <ArticleInfo />
        <ArticleBody />
        <ArticleLinks />
      </div>
    )
  }
}

export default Article
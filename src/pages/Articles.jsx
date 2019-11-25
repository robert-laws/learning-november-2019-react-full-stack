import React from 'react';
import articles from '../data/articles';

import ArticlesList from '../components/ArticlesList';

const Articles = () => {
  return (
    <>
      <h1>
        Articles
      </h1>
      <div>
        <ArticlesList articles={articles} />
      </div>
    </>
  )
}

export default Articles
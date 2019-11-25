import React from 'react';
import articles from '../data/articles';

import ArticlesList from '../components/ArticlesList';

const Article = ({ match }) => {
  const name = match.params.name;
  const article = articles.find(article => article.name === name);

  if (!article) return <h1>No Article Found...</h1>;

  const otherArticles = articles.filter(article => article.name !== name);

  return (
    <>
      <h1>
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <h2>Other Articles</h2>
      <ArticlesList articles={otherArticles} />
    </>
  )
}

export default Article
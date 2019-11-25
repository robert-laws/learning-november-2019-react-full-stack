import React from 'react';
import articles from '../data/articles';

const Article = ({ match }) => {
  const name = match.params.name;
  const article = articles.find(article => article.name === name);

  if (!article) return <h1>No Article Found...</h1>;

  return (
    <>
      <h1>
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  )
}

export default Article
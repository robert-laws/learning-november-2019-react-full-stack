import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles';

const Articles = () => {
  return (
    <>
      <h1>
        Articles
      </h1>
      <div>
        {articles.map((article, index) => {
          return (
            <>
              <Link key={index} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>  
              </Link>
              <hr />
            </>
          )
        })}
      </div>
    </>
  )
}

export default Articles
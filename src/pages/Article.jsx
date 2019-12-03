import React, { useState, useEffect } from 'react';
import articles from '../data/articles';

import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import NotFound from '../pages/NotFound';

const Article = ({ match }) => {
  const name = match.params.name;
  const article = articles.find(article => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    }
    fetchData();
  }, [name])

  if (!article) return <NotFound />;

  const otherArticles = articles.filter(article => article.name !== name);

  return (
    <>
      <h1>
        {article.title}
      </h1>
      <p>This post has been upvoted {articleInfo.upvotes} times.</p>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <h2>Other Articles</h2>
      <ArticlesList articles={otherArticles} />
    </>
  )
}

export default Article
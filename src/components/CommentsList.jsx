import React from 'react';

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3>Comments:</h3>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
          </div>
        )
      })}
    </>
  )
}

export default CommentsList;
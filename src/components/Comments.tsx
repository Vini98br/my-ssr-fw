import React, { useState } from "react";

// import { Container } from './styles';

const Comments: React.FC<{ comments: string[] }> = ({
  comments: originalComments,
}) => {
  const [comments, setComments] = useState(originalComments);
  const [newComment, setNewComment] = useState("");
  return (
    <>
      {comments.map((comment) => (
        <li key={comment}>{comment}</li>
      ))}
      <input type="text" onChange={(e) => setNewComment(e.target.value)} />
      <button
        onClick={() => {
          setComments([...comments, newComment]);
          setNewComment("");
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Comments;

import React from "react";
import fetchPost from "../api/fetcher";

const resouces = fetchPost(
  `https://jsonplaceholder.typicode.com/posts/1/comments`
);

const Comments = ({ postId = 1 }) => {
  const commnets = resouces.read();

  return (
    <div>
      {commnets.map((comment) => (
        <h1 key={comment.id}>{comment.name}</h1>
      ))}
    </div>
  );
};

export default Comments;

"use client";
import React from "react";
import fetchPost from "../api/fetcher";

const resouces = fetchPost(
  "https://jsonplaceholder.typicode.com/post?_limit=5"
);

const PostSelector = ({ onPost }) => {
  const post = resouces.read();

  return (
    <div>
      <h1>React suspense and Error boundaries</h1>
      <select onChange={onPost}>
        {post?.map((postItem) => (
          <option key={postItem.id} value={postItem.id}>
            {postItem.title}
          </option>
        ))}
      </select>
    </div>
  );
};

//

export default PostSelector;

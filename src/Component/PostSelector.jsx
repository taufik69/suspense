import React from "react";
import fetchPost from "../api/fetcher";

const resouces = fetchPost(
  "https://jsonplaceholder.typicode.com/posts?_limit=5"
);

const PostSelector = () => {
  const post = resouces.read();
  return (
    <div>
      <h1>React suspense and Error boundaries</h1>
    </div>
  );
};

//

export default PostSelector;

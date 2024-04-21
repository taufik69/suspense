import React from "react";
import fetchPost from "../api/fetcher";

const postData = fetchPost(
  "https://jsonplaceholder.typicode.com/posts?_limit=5"
);

const PostSelector = () => {
  return (
    <div>
      <h1>React suspense and Error boundaries</h1>
    </div>
  );
};

//

export default PostSelector;

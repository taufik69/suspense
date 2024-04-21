import React from "react";
import { useEffect, useState } from "react";
const PostSelector = ({ onSelectPost }) => {
  const [isPostLoading, setisPostLoading] = useState(false);
  const [post, setpost] = useState([]);
  const [PostError, setPostError] = useState("");
  useEffect(() => {
    setisPostLoading(true);
    const FetchPost = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        const data = await response.json();
        if (response.ok) {
          setisPostLoading(false);
          setpost(data);
        } else {
          setisPostLoading(false);
          setPostError("There was an error");
        }
      } catch (error) {
        setisPostLoading(false);
        setPostError(error.message);
      }
    };

    FetchPost();
  }, []);
  let postcontent;
  if (isPostLoading) {
    postcontent = <div>post loading ....</div>;
  } else if (!isPostLoading && PostError) {
    postcontent = <div> {PostError}</div>;
  } else {
    postcontent = (
      <select onChange={onSelectPost}>
        <option value="#">Select Post</option>
        {post?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    );
  }
  return (
    <div>
      <h1>React suspense and Error boundaries</h1>
      <div>{postcontent}</div>
    </div>
  );
};

export default PostSelector;

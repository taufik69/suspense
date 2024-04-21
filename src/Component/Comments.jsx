import React, { useEffect, useState } from "react";

const Comments = ({ postId = 1 }) => {
  const [comments, setcomments] = useState([]);
  const [isCommnetsLoading, setisCommnetsLoading] = useState(false);
  const [commetError, setcommetError] = useState(null);

  useEffect(() => {
    setisCommnetsLoading(true);
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );
        const data = await response.json();
        console.log(response.ok);
        if (response.ok) {
          setisCommnetsLoading(false);
          setcomments(data);
        } else {
          setisCommnetsLoading(false);
          setcommetError("No any  comment found");
        }
      } catch (error) {
        setisCommnetsLoading(false);
        setcommetError(`error.message ${error.message}`);
      }
    };

    fetchComments();
  }, [postId]);

  let postcontent;
  if (isCommnetsLoading) {
    postcontent = <div>post loading ....</div>;
  } else if (!isCommnetsLoading && commetError) {
    postcontent = <div> {commetError}</div>;
  } else {
    postcontent = (
      <>
        {comments
          ? comments.map((item) => (
              <h1 key={item.id}>{item.body.slice(0, 40)}</h1>
            ))
          : ""}
      </>
    );
  }
  return <div>{postcontent}</div>;
};

export default Comments;

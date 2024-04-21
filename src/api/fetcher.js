import WrapPromise from "../utils/Wrapproise";

const fetchPost = (url) => {
  const response = fetch(url).then((res) => res.json());
  return WrapPromise(response);
};

export default fetchPost;

import { Suspense, useState } from "react";
import PostSelector from "./Component/PostSelector";
import Comments from "./Component/Comments";
function App() {
  const [postId, setpostId] = useState(null);
  const handlePost = (e) => {
    setpostId(e.target.value);
  };
  return (
    <>
      <Suspense fallback={"loading ..."}>
        <PostSelector onPost={handlePost} />
      </Suspense>
      <Suspense fallback={"comments loading ....."}>
        <Comments postId={postId} />
      </Suspense>
    </>
  );
}

export default App;

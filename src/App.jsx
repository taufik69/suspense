import { Suspense, useState } from "react";
import PostSelector from "./Component/PostSelector";
import Comments from "./Component/Comments";
import { ErrorBoundary } from "react-error-boundary";
function App() {
  const [postId, setpostId] = useState(null);
  const handlePost = (e) => {
    setpostId(e.target.value);
  };
  return (
    <div>
      <ErrorBoundary fallback={"Error khaicos vai postSelector "}>
        <Suspense fallback={"loading ..."}>
          <PostSelector onPost={handlePost} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={"Error perform in Comment"}>
        <Suspense fallback={"comments loading ....."}>
          <Comments postId={postId} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;

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
      <ErrorBoundary fallback={<h1>Error khaicos vai postSelector</h1>}>
        <Suspense fallback={"loading ..."}>
          <PostSelector onPost={handlePost} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<h1>Error perform in Comment</h1>}>
        <Suspense fallback={"comments loading ....."}>
          <Comments postId={postId} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;

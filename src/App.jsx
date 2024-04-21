import { Suspense, useState } from "react";
import PostSelector from "./Component/PostSelector";
import Comments from "./Component/Comments";
function App() {
  return (
    <>
      <Suspense fallback={"loading ..."}>
        <PostSelector />
      </Suspense>
      {/* <Comments postId={selectedId} /> */}
    </>
  );
}

export default App;

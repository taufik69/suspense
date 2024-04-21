import { useState } from "react";
import PostSelector from "./Component/PostSelector";
import Comments from "./Component/Comments";
function App() {
  const [selectedId, setselectedId] = useState(null);
  const handleSelectPost = (e) => {
    setselectedId(e.target.value);
  };

  return (
    <>
      <h1>React suspense and Error boundaries</h1>
      <PostSelector onSelectPost={handleSelectPost} />
      <Comments postId={selectedId} />
    </>
  );
}

export default App;

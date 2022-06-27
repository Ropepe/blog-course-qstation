import React from "react";
import Blogs from "./components/Blogs";

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <div>
      <h1>Blog</h1>
      <Blogs />
    </div>
  );
};

export default App;

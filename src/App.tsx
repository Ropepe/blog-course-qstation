import React from "react";
import Blogs from "./components/Blogs";
import "./index.css";
interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Blogs />
    </div>
  );
};

export default App;

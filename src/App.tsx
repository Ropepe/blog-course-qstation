import React from "react";
import BlogList from "./pages/Main/BlogList";
import "./index.css";
interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <>
      <div className="containter">
        <BlogList />
      </div>
    </>
  );
};

export default App;

import React from "react";
import BlogList from "./pages/Main/BlogList";
import "./index.css";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Reactions from "./components/Reactions/Reactions";

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <>
      <Nav />
      <Hero />
      <div className="containter">
        <BlogList />
        {/* <Reactions /> */}
      </div>
    </>
  );
};

export default App;

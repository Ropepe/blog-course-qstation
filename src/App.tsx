import React from "react";
import BlogList from "./pages/Main/BlogList";
import "./index.css";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import FullView from "./pages/FullView/FullView";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import About from "./pages/About/About";
import AddPost from "./pages/AddPost/AddPost";

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="containter">
                <BlogList />
              </div>
            </>
          }
        />
        <Route path="/post/:id" element={<FullView />} />
        <Route path="/about" element={<About />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/editpost/:id" element={<div>Edit post</div>} />
        <Route path="/deletepost/:id" element={<div>Delete post</div>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

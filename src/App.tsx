import React, { useCallback, useEffect } from "react";
import BlogList from "./pages/Main/BlogList";
import "./index.css";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FullView from "./pages/FullView/FullView";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import About from "./pages/About/About";
import AddPost from "./pages/AddPost/AddPost";
import { usersFetch } from "./Store/users-slice";
import { axiosInstance } from "./Api";
import { postFetch } from "./Store/post-slice";
import { useAppDispatch } from "./Store/Hooks";
import Moment from "react-moment";
import moment from "moment";

interface IProps {}
const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const App: React.FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const fetchBlogs = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/posts");

      // dodavanje nasumicnog datuma
      const newArray = response.data.map((res: any) => {
        return {
          id: res.id,
          title: res.title,
          body: res.body,
          userId: res.userId,
          date: moment(
            new Date(randomDate(new Date(2012, 0, 1), new Date()))
          ).format("DD/MM/YYYY"),
          reactions: {
            like: (Math.random() * 10).toFixed(0),
            dislike: (Math.random() * 10).toFixed(0),
            love: (Math.random() * 10).toFixed(0),
            haha: 0,
            wow: (Math.random() * 10).toFixed(0),
          },
          // id: res.id,
          // title: res.title,
          // body: res.body,
          // userId: res.userId,
          // date: new Date(
          //   randomDate(new Date(2012, 0, 1), new Date())
          // ).toLocaleDateString("ba-BA"),
          // reactions: {
          //   like: (Math.random() * 10).toFixed(0),
          //   dislike: (Math.random() * 10).toFixed(0),
          //   love: (Math.random() * 10).toFixed(0),
          //   haha: 0,
          //   wow: (Math.random() * 10).toFixed(0),
          // },
        };
      });
      // console.log(newArray);
      dispatch(postFetch(newArray));
    } catch (error) {
      console.log("GRESKA");
      console.log(error);
    }
  }, [dispatch]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/users");
      dispatch(usersFetch(response.data));
    } catch (error) {
      console.log("User Fetch Greska");
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchBlogs();
    fetchUsers();
  }, [fetchBlogs, fetchUsers]);

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
        <Route path="/post/edit/:id" element={<div>Edit post</div>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

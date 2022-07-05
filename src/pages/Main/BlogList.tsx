import React, { useCallback, useEffect } from "react";
import Blog from "./Blog";
import { axiosInstance } from "../../Api";
import { postFetch } from "../../Store/post-slice";
import { useAppSelector, useAppDispatch } from "../../Store/Hooks";
import Styles from "./BlogList.module.css";
import { usersFetch } from "../../Store/users-slice";

interface IProps {}

const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
const BlogList: React.FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);

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
          date: new Date(randomDate(new Date(2012, 0, 1), new Date())),
        };
      });

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
    <div className={Styles.blogs}>
      {posts.posts.map((post) => {
        return <Blog key={post.id} infos={post} />;
      })}
    </div>
  );
};

export default BlogList;

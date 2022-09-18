import React from "react";
import Blog from "./Blog";

import { useAppSelector } from "../../Store/Hooks";
import Styles from "./BlogList.module.css";

interface IProps {}

const BlogList: React.FC<IProps> = () => {
  const posts = useAppSelector((state) => state.posts);

  return (
    <>
      <div className={Styles.header}>
        <h1 className={Styles.title}>LAST BLOG NEWS</h1>
        <div className={Styles.line}></div>
      </div>
      <div className={Styles.blogs}>
        {posts.posts.map((post) => {
          return <Blog key={post.id} infos={post} />;
        })}
      </div>
    </>
  );
};

export default BlogList;

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/Hooks";
import { postCreate } from "../../Store/post-slice";
import styles from "./AddPost.module.css";
interface IAddPostProps {}

const AddPost: React.FunctionComponent<IAddPostProps> = (props) => {
  const users = useAppSelector((state) => state.users.users);
  const posts = useAppSelector((state) => state.posts.posts);
  const dispatch = useAppDispatch();

  // id: 0,
  // title: "",
  // body: "",
  // userId: 0,
  // date: new Date().toLocaleDateString("ba-BA"),
  // reactions: {
  //   like: (Math.random() * 10).toFixed(0),
  //   dislike: (Math.random() * 10).toFixed(0),
  //   love: (Math.random() * 10).toFixed(0),
  //   haha: 0,
  //   wow: (Math.random() * 10).toFixed(0),

  const [post, setPost] = useState<any>({
    id: 0,
    title: "",
    body: "",
    userId: 0,
    date: new Date().toLocaleDateString("ba-BA"),
    reactions: {
      like: 0,
      dislike: 0,
      love: 0,
      haha: 0,
      wow: 0,
    },
  });
  const updateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(), console.log(post);
    // dispatch(postCreate(post));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_group}>
          <h1>Add post</h1>
          <form
            onSubmit={() => {
              updateHandler;
            }}
            className={styles.form}
          >
            <label>Author:</label>
            <select>
              {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}asdas
                  </option>
                );
              })}
            </select>
            <label>Title:</label>
            <input type="text" />
            <label>Content:</label>
            <textarea className={styles.textarea}></textarea>

            <div></div>
            <button type="submit" className={styles.button}>
              Add post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPost;

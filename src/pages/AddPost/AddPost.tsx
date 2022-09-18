import React, { useState, useRef, useEffect, useCallback } from "react";
import Moment from "react-moment";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/Hooks";
import { postCreate } from "../../Store/post-slice";
import styles from "./AddPost.module.css";
interface IAddPostProps {}

const AddPost: React.FunctionComponent<IAddPostProps> = (props) => {
  const users = useAppSelector((state) => state.users.users);
  const posts = useAppSelector((state) => state.posts.posts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>({
    id: 0,
    title: "",
    body: "",
    userId: 1,
    date: moment().format("DD/MM/YYYY"),
    // date: <Moment format="DD/MM/YYYY - hh:mm:ss">{new Date()}</Moment>,
    reactions: {
      like: 0,
      dislike: 0,
      love: 0,
      haha: 0,
      wow: 0,
    },
  });

  const updateId = useCallback(async () => {
    setPost((prevState: any) => {
      try {
        return { ...prevState, id: Number(posts[posts.length - 1].id + 1)! };
      } catch (error) {
        navigate("/addpost");
      }
    });
  }, []);

  useEffect(() => {
    updateId();
  }, [updateId]);

  const updateUserId = (id: any) => {
    setPost((prevState: any) => {
      return { ...prevState, userId: Number(id) };
    });
  };

  const updateHandler = (e: any) => {
    dispatch(postCreate(post));
    alert("Post je dodat!");
    navigate("/");
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_group}>
          <h1>Add post</h1>
          <form
            onSubmit={() => {
              updateHandler(event);
            }}
            className={styles.form}
          >
            <label>Author:</label>
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                updateUserId(e.target.value)
              }
            >
              {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
            <label>Title:</label>
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPost((prevState: any) => {
                  return {
                    ...prevState,
                    title: e.target.value,
                  };
                })
              }
            />
            <label>Content:</label>
            <textarea
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setPost((prevState: any) => {
                  return {
                    ...prevState,
                    body: e.target.value,
                  };
                })
              }
              className={styles.textarea}
            ></textarea>

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

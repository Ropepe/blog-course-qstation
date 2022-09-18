import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InfoFV from "../../components/FullViewInfo/InfoFV";
import Modal from "../../components/Modal/Modal";
import modalStyles from "../../components/Modal/Modal.module.css";
import { useAppDispatch, useAppSelector } from "../../Store/Hooks";
import { postUpdate } from "../../Store/post-slice";
import styles from "./FullView.module.css";
import Moment from "react-moment";

interface IFullViewProps {}

const FullView: React.FunctionComponent<IFullViewProps> = () => {
  const users = useAppSelector((state) => state.users.users);
  const posts = useAppSelector((state) => state.posts.posts);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [bodyText, setBodyText] = useState<string>("");
  useEffect(() => {
    const post = posts.find(
      (postCurr) => postCurr.id === parseInt(id!.toString(), 10)
    );

    const user = users.find((userCurr) => userCurr.id === post!.userId);
    {
      posts.map((posta) => {
        if (posta.id == post!.id) {
          return setTitle(post!.title), setBodyText(post!.body);
        }
      });
    }
  }, []);

  const [isShown, setIsShown] = useState<boolean>(false);

  const titleChanger = (event: any) => {
    setTitle(event.target.value);
  };
  const textChanger = (event: any) => {
    setBodyText(event.target.value);
  };
  const modalToggle = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          {posts.map((post) => {
            if (post.id == Number(id)) {
              if (title == "" && bodyText == "") {
                setTitle(post.title);
                setBodyText(post.body);
              }
              return (
                <>
                  {isShown && (
                    <Modal isClicked={modalToggle}>
                      <div className={modalStyles.body}>
                        <h1>Edit post</h1>

                        <label>Title:</label>
                        <input
                          type="text"
                          defaultValue={post.title}
                          value={title}
                          onChange={titleChanger}
                        />
                        <label>Content:</label>
                        <textarea
                          value={bodyText}
                          onChange={textChanger}
                          className={styles.textarea}
                        ></textarea>

                        <div></div>
                        <div>
                          <button
                            type="submit"
                            className={styles.button}
                            onClick={() => {
                              dispatch(
                                postUpdate({
                                  id: post.id,
                                  title: title,
                                  body: bodyText,
                                  userId: post.userId,
                                  date: post.date,
                                  reactions: post.reactions,
                                })
                              );

                              modalToggle();
                            }}
                          >
                            Add post
                          </button>
                          <button
                            onClick={() => {
                              setTitle(post.title);
                              setBodyText(post.body);
                            }}
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </Modal>
                  )}
                  <div key={id} className={styles.body}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.description}>{post.body}</p>
                    <p className={styles.author}>
                      {users.map((user) => {
                        if (user.id === post.userId) {
                          return user.name;
                        }
                      })}
                    </p>
                    <div className={styles.reactions}>
                      <InfoFV
                        date={post.date}
                        id={post.id}
                        isClicked={modalToggle}
                      ></InfoFV>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default FullView;

import { toASCII } from "punycode";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../Store/Hooks";
import styles from "./FullView.module.css";
interface IFullViewProps {
  // id: number;
}

const FullView: React.FunctionComponent<IFullViewProps> = () => {
  const users = useAppSelector((state) => state.users.users);
  const posts = useAppSelector((state) => state.posts.posts);
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(
    (postCurr) => postCurr.id === parseInt(id!.toString(), 10)
  );
  const user = users.find((userCurr) => userCurr.id === post!.userId);
  useEffect(() => {
    if (!post) {
      navigate("/");
    } else if (post === undefined) {
      navigate("/");
    }
  }, [post, navigate]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
          <h1>{post!.title}</h1>
          <p>{post!.body}</p>
          <p>{user!.name}</p>
        </div>
        <div></div>
        <div className={styles.info}>
          <div>
            {/* {users.map((user) => {
              if (user.id === posts.) {
                return <label>{user.name}</label>;
              }
            })} */}
          </div>
          <div>
            {/* {posts.map((post) => {
              if (post.id == Number(id)) {
                return <label key={id}>{post.body}</label>;
              }
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullView;

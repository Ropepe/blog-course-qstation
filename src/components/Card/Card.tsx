import React, { useEffect } from "react";
import { useAppSelector } from "../../Store/Hooks";
import styles from "./Card.module.css";
import Info from "./Info";

interface ICardProps {
  title: string;
  description: string;
  id: number;
  userId: number;
}

const Card: React.FunctionComponent<ICardProps> = ({
  title,
  description,
  id,
  userId,
}) => {
  const users = useAppSelector((state) => state.users.users);
  const posts = useAppSelector((state) => state.posts.posts);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
          <h1>{title}</h1>
          <p>{description.substring(0, 100)} ...</p>
        </div>
        <div className={styles.info}>
          <Info
            author={users.map((user) => {
              if (user.id === userId) {
                return user.name;
              }
            })}
            id={id}
            date={posts.map((post) => {
              if (post.id == id) {
                return `${post.date.getDay()}/${post.date.getDate()}/${post.date.getFullYear()}`;
                /*post.date.toDateString()*/
              }
            })}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
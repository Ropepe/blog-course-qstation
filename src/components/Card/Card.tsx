import React, { useEffect } from "react";
import Moment from "react-moment";
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
          <h1>{title.toLowerCase()}</h1>
          <p>{description.substring(0, 100).toLowerCase()} ...</p>
        </div>
        <div className={styles.info}>
          {/* <div className={styles.reactions}>
            <Reactions />
          </div> */}
          <Info
            author={users.map((user) => {
              if (user.id === userId) {
                return user.name;
              }
            })}
            id={id}
            date={posts.map((post) => {
              if (post.id == id) {
                return post.date;
              }
            })}
          />
        </div>
      </div>
    </>
  );
};

export default Card;

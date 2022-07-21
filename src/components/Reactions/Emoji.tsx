import * as React from "react";
import { useAppDispatch } from "../../Store/Hooks";
import { reactionUpdate } from "../../Store/post-slice";
import styles from "./Emoji.module.css";

interface IEmojiProps {
  reaction: string;
  id: number;
  count: number;
  children: React.ReactNode;
}

const Emoji: React.FunctionComponent<IEmojiProps> = ({
  reaction,
  id,
  count,
  children,
}) => {
  const dispatch = useAppDispatch();
  const payload = {
    id,
    reaction,
  };
  return (
    <>
      <button
        onClick={() => {
          dispatch(reactionUpdate(payload));
        }}
        className={styles.emoji}
      >
        {children}{" "}
      </button>
      {count > 0 && <label>{count}</label>}
    </>
  );
};

export default Emoji;

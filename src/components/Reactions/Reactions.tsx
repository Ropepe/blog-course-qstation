import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Store/Hooks";
import Emoji from "./Emoji";
import styles from "./Reactions.module.css";

const like = "👍";
const dislike = "👎";
const love = "😍";
const haha = "😂";
const wow = "😲";

interface IReactionsProps {
  idR: number;
}

const Reactions: React.FunctionComponent<IReactionsProps> = ({ idR }) => {
  const posts = useAppSelector((state) => state.posts.posts);

  return (
    <div className={styles.reactionbar}>
      <Emoji count={posts[idR - 1].reactions.like} reaction="like" id={idR}>
        {like}
      </Emoji>
      <Emoji
        count={posts[idR - 1].reactions.dislike}
        reaction="dislike"
        id={idR}
      >
        {dislike}
      </Emoji>
      <Emoji count={posts[idR - 1].reactions.love} reaction="love" id={idR}>
        {love}
      </Emoji>
      <Emoji count={posts[idR - 1].reactions.haha} reaction="haha" id={idR}>
        {haha}
      </Emoji>
      <Emoji count={posts[idR - 1].reactions.wow} reaction="wow" id={idR}>
        {wow}
      </Emoji>
    </div>
  );
};

export default Reactions;

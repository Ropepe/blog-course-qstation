import * as React from "react";
import Button from "../Button/Button";
import styles from "./Info.module.css";

interface IInfoProps {
  author: string | any;
  id: number;
  date: any;
}

const Info: React.FunctionComponent<IInfoProps> = ({ author, date }) => {
  return (
    <div className={styles.info}>
      <Button>Pregledaj post</Button>
      <>
        <label>{author}</label>
        <label>{date}</label>
      </>
    </div>
  );
};

export default Info;

import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Store/Hooks";
import Button from "../Button/Button";
import Reactions from "../Reactions/Reactions";
import styles from "./Info.module.css";

interface IInfoProps {
  author: string | any;
  id: number;
  date: any;
}

const Info: React.FunctionComponent<IInfoProps> = ({ author, date, id }) => {
  return (
    <>
      <div className={styles.info}>
        <Button>Detaljno</Button>
        <>
          <label>{author}</label>
          <label>{date}</label>
        </>
      </div>

      <div className={styles.reactions}>
        <div className={styles.divider}></div>
        <Reactions idR={id} />
      </div>
    </>
  );
};

export default Info;

import moment from "moment";
import { stringify } from "querystring";
import React from "react";
import Moment from "react-moment";

import Button from "../Button/Button";
import Reactions from "../Reactions/Reactions";
import styles from "./Info.module.css";

interface IInfoProps {
  author: string | any;
  id: number;
  date: any;
}

const Info: React.FunctionComponent<IInfoProps> = ({ author, date, id }) => {
  const datum: string = date;
  return (
    <>
      <div className={styles.info}>
        <div className={styles.button}>
          <Button key={id} id={id}>
            Detaljno
          </Button>
        </div>

        <>
          <label>{author}</label>
          <label>{date}</label>
          {/* <label>
            {moment(date)
              .startOf(`hour`)
              .endOf("week")
              .fromNow()}
          </label> */}
        </>
      </div>
      <div className={styles.reactions}>
        <div className={styles.divider}></div>
        {id === undefined ? null : <Reactions idR={id} />}
      </div>
    </>
  );
};

export default Info;

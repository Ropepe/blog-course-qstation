import React from "react";
import Button from "../Button/Button";
import ButtonTwo from "../Button/ButtonTwo";
import Reactions from "../Reactions/Reactions";
import styles from "./InfoFV.module.css";

interface IInfoFVProps {
  id: number;
  date: any;
  isClicked(): any;
}

const InfoFV: React.FunctionComponent<IInfoFVProps> = ({
  date,
  id,
  isClicked,
}) => {
  return (
    <>
      <div className={styles.info}>
        <div className={styles.button}>
          <ButtonTwo id={id} isClicked={isClicked}>
            EDIT
          </ButtonTwo>
          <div className={styles.space_btn}></div>
          <Button id={id}>DELETE</Button>
        </div>

        <>
          <label>{date}</label>
        </>
      </div>

      <div className={styles.reactions}>
        <div className={styles.divider}></div>
        <Reactions key={id} idR={id} />
      </div>
    </>
  );
};

export default InfoFV;

import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
interface IModalProps {}

export const MDX: React.FunctionComponent<IModalProps> = (props) => {
  return (
    <>
      <div className={styles.modal}>
        //header of modal
        <div className={styles.header}>
          <h1 className={styles.title}>Title</h1>
        </div>
        //line
        <div className={styles.devider} />
        //body of modal
        <div className={styles.body}></div>
        //line
        <div className={styles.devider} />
        //footer of modal
        <div className={styles.footer}></div>
      </div>
    </>
  );
};

const portal: any = document.getElementById("modal");
const Modal: React.FunctionComponent<IModalProps> = (props) => {
  return ReactDOM.createPortal(<MDX {...props} />, portal);
};
export default Modal;

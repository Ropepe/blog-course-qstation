import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

interface IModalProps {
  children: any;
  isClicked(): any;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  children,
  isClicked,
}) => {
  return ReactDOM.createPortal(
    <>
      <div>
        <div className={styles.overlay} onClick={() => isClicked()}></div>
        <div className={styles.frame} onClick={() => null}>
          <div>{children}</div>
        </div>
      </div>
    </>,
    document.getElementById("modal")!
  );
};
export default Modal;

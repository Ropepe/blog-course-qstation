import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Store/Hooks";
import { postDelete } from "../../Store/post-slice";
import styles from "./Button.module.css";
interface IButtonProps {
  children: React.ReactNode;
  id: number;
  isClicked(): void;
}

const ButtonTwo: React.FC<IButtonProps> = ({ id, children, isClicked }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        if (children == "EDIT") {
          isClicked();
        }
      }}
      className={styles.main}
    >
      {children}
    </button>
  );
};

export default ButtonTwo;

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Store/Hooks";
import { postDelete } from "../../Store/post-slice";
import styles from "./Button.module.css";
interface IButtonProps {
  children: React.ReactNode;
  id: number;
}

const Button: React.FC<IButtonProps> = ({ id, children }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        if (children == "EDIT") {
        } else if (children == "DELETE") {
          if (confirm("Do you want to delete this post?")) {
            dispatch(postDelete(id));
            navigate(`/`);
          } else {
            alert("Prekinuto");
          }
        } else {
          navigate(`/post/${Number(id)}`);
        }
      }}
      className={styles.main}
    >
      {children}
    </button>
  );
};

export default Button;

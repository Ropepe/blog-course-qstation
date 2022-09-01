import * as React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";
interface IButtonProps {
  children: React.ReactNode;
  id: number;
}

const Button: React.FC<IButtonProps> = ({ id, children }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/post/${Number(id)}`)}
      className={styles.main}
    >
      {children}
    </button>
  );
};

export default Button;

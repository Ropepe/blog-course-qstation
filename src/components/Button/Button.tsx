import * as React from "react";
import styles from "./Button.module.css";
interface IButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props) => {
  return <button className={styles.main}>{props.children}</button>;
};

export default Button;

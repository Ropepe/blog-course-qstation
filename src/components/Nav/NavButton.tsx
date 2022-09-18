import * as React from "react";
import styles from "./NavButton.module.css";

interface INavButton {
  children: React.ReactNode;
}

const NavButton: React.FunctionComponent<INavButton> = ({ children }) => {
  return (
    <li className={styles.button}>
      <div className={styles.a}>{children}</div>
    </li>
  );
};

export default NavButton;

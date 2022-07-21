import * as React from "react";
import styles from "./NavButton.module.css";

interface INavButton {
  children: React.ReactNode;
}

const NavButton: React.FunctionComponent<INavButton> = ({ children }) => {
  return (
    <li className={styles.button}>
      <a className={styles.a}>{children}</a>
    </li>
  );
};

export default NavButton;

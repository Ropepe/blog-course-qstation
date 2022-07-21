import * as React from "react";
import styles from "./Nav.module.css";
import NavButton from "./NavButton";
import Logo from "../../assets/R-logo-white.png";

interface INavProps {}

const Nav: React.FunctionComponent<INavProps> = (props) => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={Logo} />
          <h2>the Real Blog</h2>
        </div>
        <div className={styles.navigation}>
          <ul>
            <NavButton>Main</NavButton>
            <NavButton>Add post</NavButton>
            <NavButton>About me</NavButton>
            <NavButton>Contact</NavButton>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;

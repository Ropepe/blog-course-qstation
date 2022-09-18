import React, { useState } from "react";
import styles from "./Nav.module.css";
import NavButton from "./NavButton";
import Logo from "../../assets/R-logo-white.png";
import { Link, useNavigate } from "react-router-dom";

interface INavProps {}

const Nav: React.FunctionComponent<INavProps> = (props) => {
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img src={Logo} />
          <h2>the Real Blog</h2>
        </div>
        <div className={styles.navigation}>
          <ul className={styles.main_links}>
            <Link className={styles.link} to="/">
              <NavButton>Main</NavButton>
            </Link>

            <Link className={styles.link} to="/addpost">
              <NavButton>Add post</NavButton>
            </Link>
            <Link className={styles.link} to="/about">
              <NavButton>About me</NavButton>
            </Link>
          </ul>
          <a
            className={styles.menu_btn}
            id="mobile"
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          >
            ☰
          </a>
        </div>
        {isOpened && (
          <ul className={styles.add_link}>
            <Link className={styles.link} to="/">
              <NavButton>Main</NavButton>
            </Link>

            <Link className={styles.link} to="/addpost">
              <NavButton>Add post</NavButton>
            </Link>
            <Link className={styles.link} to="/about">
              <NavButton>About me</NavButton>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
};

export default Nav;

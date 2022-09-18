import * as React from "react";
import styles from "./Hero.module.css";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.title}>the Blog</h1>
      </div>
    </>
  );
};

export default Hero;

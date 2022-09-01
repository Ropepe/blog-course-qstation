import * as React from "react";
import styles from "./About.module.css";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Perica Vrhovac</h1>
        <p className={styles.subtitle}>Front end developer</p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </p>
      </div>
    </>
  );
};

export default About;

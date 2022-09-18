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
          I'm an enthusiastic and detail-oriented Frontend Developer seeking an
          entry-level position with the company to use my skills in coding,
          troubleshooting complex problems, and assisting in the timely
          completion of projects. My main orientation is React JS & JavaScript.
          I have also worked as a graphic designer and video editor for a long
          time and a keen eye for aesthetics helps me develop clean and fresh
          web presentations and web applications
        </p>
        <h2 className={styles.h2}>Frontend skills</h2>
        <ul className={styles.list}>
          <li>HTML</li>
          <li>CSS</li>
          <li>React JS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Git</li>
          <li>Bootstrap</li>
          <li>WordPress</li>
        </ul>
        <h2 className={styles.h2}>Soft skills</h2>
        <ul className={styles.list}>
          <li>Adaptable</li>
          <li>Willing to learn</li>
          <li>Research</li>
          <li>Cooperative</li>
          <li>Honest</li>
          <li>Respectful</li>
          <li>Team Player</li>
        </ul>
      </div>
    </>
  );
};

export default About;

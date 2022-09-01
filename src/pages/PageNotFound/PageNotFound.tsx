import * as React from "react";
import styles from "./PageNotFound.module.css";

interface IPageNotFoundProps {}

const PageNotFound: React.FunctionComponent<IPageNotFoundProps> = (props) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Page not found</h1>

        <p className={styles.subtitle}>
          The page you are looking for does not exist.
        </p>
      </div>
    </>
  );
};

export default PageNotFound;

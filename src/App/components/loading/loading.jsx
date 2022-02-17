import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles["loader"]}>
      <div className={styles["loader-wheel"]}></div>
      <div className={styles["loader-text"]}></div>
    </div>
  );
};

export default Loading;

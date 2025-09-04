import styles from "./Count.module.css";

const Count = ({ value }) => {
  return (
    <>
      <span className={styles.count}>{value}</span>
    </>
  );
};

export { Count };

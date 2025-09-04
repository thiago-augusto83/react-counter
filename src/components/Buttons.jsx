import styles from "./Buttons.module.css";

const Buttons = ({ label, color = "default" }) => {
  return (
    <>
      <button className={`${styles.btn} ${styles[color]}`}>{label}</button>
    </>
  );
};

export { Buttons };

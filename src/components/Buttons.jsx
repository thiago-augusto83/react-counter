import styles from "./Buttons.module.css";

const Buttons = ({ label, color = "default", onButtonClick }) => {
  return (
    <>
      <button
        className={`${styles.btn} ${styles[color]}`}
        onClick={() => {
          onButtonClick();
        }}
      >
        {label}
      </button>
    </>
  );
};

export { Buttons };

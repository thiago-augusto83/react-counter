import { Buttons } from "./Buttons";
import { Count } from "./Count";
import styles from "./Counter.module.css";

const Counter = () => {
  return (
    <>
      <div className={styles.counter}>
        <Count />
        <section className={styles.btnContainer}>
          <Buttons label={"+"} color="increment" />
          <Buttons label={"Reset"} color="reset" />
          <Buttons label={"-"} color="decrement" />
        </section>
      </div>
    </>
  );
};

export { Counter };

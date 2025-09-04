import { useState } from "react";
import { Buttons } from "./Buttons";
import { Count } from "./Count";
import styles from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <>
      <div className={styles.counter}>
        <Count value={count} />
        <section className={styles.btnContainer}>
          <Buttons label={"+"} color="increment" onButtonClick={increment} />
          <Buttons label={"Reset"} color="reset" onButtonClick={reset} />
          <Buttons label={"-"} color="decrement" onButtonClick={decrement} />
        </section>
      </div>
    </>
  );
};

export { Counter };

import { Counter } from "./components/Counter";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <main className={styles.app}>
        <Counter />
      </main>
    </>
  );
};

export { App };

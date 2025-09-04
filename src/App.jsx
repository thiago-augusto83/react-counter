import { Counter } from "./components/Counter";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <main className={styles.app}>
        <Header />
        <Counter />
        <Footer/>
      </main>
    </>
  );
};

export { App };

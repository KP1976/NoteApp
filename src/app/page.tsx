import styles from "./page.module.css";
import { SideBar } from "./components/SideBar/SideBar";
import { Main } from "./components/Main/Main";

export default function Home() {
  return (
    <div className={styles.page}>
      <SideBar />
      <Main />
    </div>
  );
}

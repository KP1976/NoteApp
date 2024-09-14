import styles from "./page.module.css";
import { SideBar } from "./components/SideBar/SideBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <SideBar />

      <main>A to jest main</main>
    </div>
  );
}

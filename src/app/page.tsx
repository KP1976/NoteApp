import Image from "next/image";
import styles from "./page.module.css";
import { CreateButton } from "./components/CreateButton/CreateButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <aside>
        <Image
          src="/NoteAppLogo.svg"
          alt="NoteApp Logo"
          width={154}
          height={31}
        />
        <CreateButton text="Create Note" />
        <CreateButton text="Create NoteBook" />
      </aside>
      <main>A to jest main</main>
    </div>
  );
}

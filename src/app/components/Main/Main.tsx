// import Image from "next/image";

import { LanguageButton } from "../LanguageButton/LanguageButton";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main className={styles.main}>
      {/* <Image src="/emptyFolder.svg" alt="empty folder" width={40} height={32} />
      <h2 className={styles.empty_folder_title}>No notes</h2> */}
      <div className={styles.text_plus_button}>
        <h1 className={styles.title}>Hello, Chris!</h1>
        <LanguageButton text="Language" />
      </div>
      <h2 className={styles.subtitle}>Sunday, 1 september 2024</h2>
    </main>
  );
};

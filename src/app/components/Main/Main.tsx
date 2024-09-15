import Image from "next/image";

import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Image src="/emptyFolder.svg" alt="empty folder" width={40} height={32} />
      <h2 className={styles.empty_folder_title}>No notes</h2>
    </main>
  );
};

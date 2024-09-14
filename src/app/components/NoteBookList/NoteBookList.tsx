import { NoteBook } from "../NoteBook/NoteBook";

import styles from "./NoteBookList.module.css";

export const NoteBookList = () => {
  return (
    <ul className={styles.noteBookList}>
      <h2 className={styles.title}>List of NoteBooks:</h2>
      <NoteBook text="Things to do"></NoteBook>
      <NoteBook text="Apps"></NoteBook>
    </ul>
  );
};

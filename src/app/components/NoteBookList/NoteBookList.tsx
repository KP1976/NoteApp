import styles from "./NoteBookList.module.css";

export const NoteBookList = () => {
  return (
    <ul className={styles.noteBookList}>
      <h2 className={styles.title}>List of NoteBooks:</h2>
      <li>Things to do</li>
      <li>Apps</li>
    </ul>
  );
};

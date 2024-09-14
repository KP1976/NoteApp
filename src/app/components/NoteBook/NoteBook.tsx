import Image from "next/image";

import styles from "./NoteBook.module.css";

type Props = {
  text: string;
};

export const NoteBook = ({ text }: Props) => {
  return (
    <li className={styles.noteBook}>
      {text}
      <div className={styles.icons}>
        <Image
          className={styles.icon}
          src="/penIcon.svg"
          alt="Edit NoteBook"
          width={18}
          height={18}
        />
        <Image
          className={styles.icon}
          src="/trashcanIcon.svg"
          alt="Delete NoteBook"
          width={16}
          height={18}
        />
      </div>
    </li>
  );
};

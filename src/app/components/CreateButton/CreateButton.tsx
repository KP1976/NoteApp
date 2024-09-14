import Image from "next/image";
import styles from "./CreateButton.module.css";

type Props = {
  text: string;
};

export const CreateButton = ({ text }: Props) => {
  return (
    <button className={styles.button}>
      {text}
      <Image
        className={styles.logo}
        src="/plusIcon.svg"
        alt="Plus"
        width={14}
        height={14}
      />
    </button>
  );
};

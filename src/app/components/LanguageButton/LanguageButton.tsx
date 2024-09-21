import Image from "next/image";
import styles from "./LanguageButton.module.css";

type Props = {
  text: string;
};

export const LanguageButton = ({ text }: Props) => {
  return (
    <button className={styles.button}>
      <Image src="/globeIcon.svg" alt="Globe Icon" width={24} height={24} />
      {text}
      <Image
        src="/arrowDownIcon.svg"
        alt="Arrow Down Icon"
        width={10}
        height={5}
      />
    </button>
  );
};

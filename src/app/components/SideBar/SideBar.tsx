import Image from "next/image";
import { CreateButton } from "../CreateButton/CreateButton";
import { NoteBookList } from "../NoteBookList/NoteBookList";

import styles from "./SideBar.module.css";
import { Footer } from "../Footer/Footer";

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <Image
        src="/NoteAppLogo.svg"
        alt="NoteApp Logo"
        width={154}
        height={31}
      />
      <CreateButton text="Create Note" />
      <CreateButton text="Create NoteBook" />
      <NoteBookList />
      <Footer />
    </aside>
  );
};

import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/flame.svg";
import styles from "@/styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.right_col}>
        <ul>
          <li>
            <Link href={"/"}>home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

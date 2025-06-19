import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.logo}>
          <Link href="/">อักษรไทย</Link>
        </h1>
        <div className={styles.menu}>
          <Link href="/consonants">Consonants</Link>
          <Link href="/vowels">Vowels</Link>
          <Link href="/tone">Tone</Link>
          <Link href="/glyphs">Glyphs</Link>
        </div>
      </div>
    </header>
  );
}
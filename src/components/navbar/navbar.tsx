import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div>
        <h4 className={styles.scrollReveal}>
          <a>learn-thai-script</a>
        </h4>
        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/glyphs">Glyphs</Link>
          <Link href="/consonants">Consonants</Link>
          <Link href="/vowels">Vowels</Link>
          <Link href="/tone">Tone</Link>
        </div>
      </div>
    </header>
  );
}
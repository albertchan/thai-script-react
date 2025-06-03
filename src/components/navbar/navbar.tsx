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
          <Link href="/tone">Tone</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </header>
  );
}
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div>
        <h4 className={styles.scrollReveal}>
          <a>learn-thai-script</a>
        </h4>
        <div className={styles.menu}>
          <a href="/glyphs">Glyphs</a>
          <a href="#about">About</a>
        </div>
      </div>
    </header>
  );
}
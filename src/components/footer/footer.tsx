import styles from "./footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} row`}>
    <p>
        © {currentYear} Albert Chan
    </p>
    </footer>

  )
}
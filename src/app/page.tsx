import styles from "./page.module.css";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <main className="row">
        <div>
          <h1 className={styles.title}>Learn<br />Thai Script</h1>
          <div className={styles.columns}>
            <div>
              <p>
                I want to learn Thai because I like Thai girls.
              </p>
              <p>
                In order to improve my Thai language skills, I figured I should learn to read and write Thai. Reading Thai requires learning the Thai script or alphabet. There are wonderful tools and apps for learning the Thai script but most of them have shitty user experiences. That's why I've made my own: this site.
              </p>
              <p>
                I created Learn Thai Script mostly for my own benefit but I guess it could help other Thai learners as well. The focus here is to study the Thai script. It's not a complete solution for learning how to speak Thai. Learning a language also requires knowing the culture, vocabulary, grammar, and pronunciation. Some of these aspects are provided here in small doses, mainly to support the learning of the script.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className={`${styles.footer} row`}>
        <p>
          © {currentYear} Albert Chan
        </p>
      </footer>
    </div>
  );
}

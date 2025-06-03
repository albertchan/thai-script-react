import styles from "./page.module.css";

export default async function Tone() {
  return (
    <main className="row">
      <div>
        <h2>Tone</h2>
        <div className={styles.grid}>
          <div>
            <p>The Thai script gives full information on the tones. Tones are realised in the vowels, but indicated in the script by a combination of the class of the initial consonant (high, mid or low), vowel length (long or short), closing consonant (plosive or sonorant, called dead or live) and, if present, one of four tone marks.</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Consonants</h3>
      </div>
      <div>
        <h3>Vowels</h3>
      </div>
    </main>
  );
}
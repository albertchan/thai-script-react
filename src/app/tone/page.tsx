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
        <div className={styles.grid}>
          <div>
            <p>There are 44 consonant letters representing 21 distinct consonant sounds. Duplicate consonants either correspond to sounds that existed in Old Thai at the time the alphabet was created but no longer exist (in particular, voiced obstruents such as d), or different Sanskrit and Pali consonants pronounced identically in Thai. There are in addition four consonant-vowel combination characters not included in the tally of 44.</p>
            <p>Consonants are divided into three classes — in alphabetical order these are middle (กลาง, klang), high (สูง, sung), and low (ต่ำ, tam) class. These class designations reflect phonetic qualities of the sounds to which the letters originally corresponded in Old Thai.</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Vowels</h3>
        <div className={styles.grid}>
          <div>
            <p>Thai vowel sounds and diphthongs are written using a mixture of vowel symbols on a consonant base. Each vowel is shown in its correct position relative to a base consonant and sometimes a final consonant as well. Vowels can go above, below, left of or right of the consonant, or combinations of these places. If a vowel has parts before and after the initial consonant, and the syllable starts with a consonant cluster, the split will go around the whole cluster.</p>
          </div>
        </div>
        <div className={styles.grid}>
          <div>
            <h4>Long Vowels</h4>
          </div>
          <div>
            <h4>Short Vowels</h4>
          </div>
        </div>
      </div>
    </main>
  );
}
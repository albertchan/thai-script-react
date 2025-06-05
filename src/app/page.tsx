import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="row">
      <div>
        <h1 className={styles.title}>Learn<br />Thai Script</h1>
        <div className="columns">
          <div>
            <h2 className={styles.subTitle}>Motivation</h2>
            <p>I want to learn Thai because I like Thai girls.</p>
            <p>In order to improve my Thai language skills, I figured I should learn to read and write Thai. Reading Thai requires learning the Thai script or alphabet. There are wonderful tools and apps for learning the Thai script but most of them have shitty user experiences. That&apos;s why I&apos;ve made my own: this site.</p>
            <p>I created Learn Thai Script mostly for my own benefit but I guess it could help other Thai learners as well. The focus here is to study the Thai script. It&apos;s not a complete solution for learning how to speak Thai. Learning a language also requires knowing the culture, vocabulary, grammar, and pronunciation. Some of these aspects are provided here in small doses, mainly to support the learning of the script.</p>
            <h2 className={styles.subTitle}>Thai Script อักษรไทย</h2>
            <p>The Thai script or alphabet gives full information on the tones. Tones are realised in the vowels, but indicated in the script by a combination of the class of the initial consonant (high, mid or low), vowel length (long or short), closing consonant (plosive or sonorant, called dead or live) and, if present, one of four tone marks.</p>
            <p>The <a href="https://en.wikipedia.org/wiki/Royal_Thai_General_System_of_Transcription" rel="noopener" target="_blank">Royal Thai General System of Transcription</a> (RTGS), the official standard for the romanisation of Thai, is used here. However, you will find a bewildering variety of romanisation used in daily practice, making it difficult to know how to pronounce a word. For more precise and standard pronounciaion, an equivalent <a href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet" rel="noopener" target="_blank">International Phonetic Alphabet</a> (IPA) is given as well.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

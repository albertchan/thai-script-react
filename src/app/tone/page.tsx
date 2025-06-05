import ThaiVowel from "@/shared/models/thai-vowel";
import styles from "./page.module.css";
import VowelTable from "@/components/vowel-table/vowel-table";

export default async function Tone() {
  const res = await fetch("http://localhost:3000/api/vowels");
  const vowels: ThaiVowel[] = await res.json();
  const long = vowels.filter((v) => v.toneClass === 'long');
  const short = vowels.filter((v) => v.toneClass === 'short');

  return (
    <main className="row">
      <div>
        <h2>Tone</h2>
        <div>
          <p>The Thai script gives full information on the tones. Tones are realised in the vowels, but indicated in the script by a combination of the class of the initial consonant (high, mid or low), vowel length (long or short), closing consonant (plosive or sonorant, called dead or live) and, if present, one of four tone marks.</p>
          <p>The <a href="https://en.wikipedia.org/wiki/Royal_Thai_General_System_of_Transcription" rel="noopener" target="_blank">Royal Thai General System of Transcription</a> (RTGS), the official standard for the romanisation of Thai, is used here. However, you will find a bewildering variety of romanisation used in daily practice, making it difficult to know how to pronounce a word. For more precise and standard pronounciaion, an equivalent <a href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet" rel="noopener" target="_blank">International Phonetic Alphabet</a> (IPA) is given as well.</p>
        </div>
      </div>
      <div>
        <h3>Consonants</h3>
        <div>
          <p>There are 44 consonant letters representing 21 distinct consonant sounds. Duplicate consonants either correspond to sounds that existed in Old Thai at the time the alphabet was created but no longer exist (in particular, voiced obstruents such as d), or different Sanskrit and Pali consonants pronounced identically in Thai. There are in addition four consonant-vowel combination characters not included in the tally of 44.</p>
          <p>Consonants are divided into three classes — in alphabetical order these are middle (กลาง, klang), high (สูง, sung), and low (ต่ำ, tam) class. These class designations reflect phonetic qualities of the sounds to which the letters originally corresponded in Old Thai.</p>
          <p>To aid learning, each consonant is traditionally associated with an acrophonic Thai word that either starts with the same sound, or features it prominently. For example, the name of the letter ข is kho khai (ข ไข่), in which kho is the sound it represents, and khai (ไข่) is a word which starts with the same sound and means "egg".</p>
        </div>
      </div>
      <div>
        <h3>Vowels</h3>
        <div>
          <p>Thai vowel sounds and diphthongs are written using a mixture of vowel symbols on a consonant base. Each vowel is shown in its correct position relative to a base consonant and sometimes a final consonant as well. Vowels can go above, below, left of or right of the consonant, or combinations of these places. If a vowel has parts before and after the initial consonant, and the syllable starts with a consonant cluster, the split will go around the whole cluster.</p>
        </div>
        <div className={styles.grid}>
          <div>
            <h4>Short Vowels</h4>
            <VowelTable vowels={short} />
          </div>
          <div>
            <h4>Long Vowels</h4>
            <VowelTable vowels={long} />
          </div>
        </div>
      </div>
    </main>
  );
}
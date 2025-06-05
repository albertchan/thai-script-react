import GlyphInspector from "@/components/glyph-inspector/glyph-inspector";
import styles from "./page.module.css";
import GlyphList from "@/components/glyph-list/glyph-list";
import ThaiGlyph from "@/shared/models/thai-glyph";
import Option from "@/shared/models/option";

export default async function Vowels() {
  const res = await fetch("http://localhost:3000/api/vowels");
  const glyphs: ThaiGlyph[] = await res.json();
  const family: Option[] = [
    { id: "all", name: "All" },
    { id: "consonant", name: "Consonants" },
    { id: "mid", name: "Consonants (Mid)" },
    { id: "high", name: "Consonants (High)" },
    { id: "low", name: "Consonants (Low)" },
    { id: "vowel", name: "Vowels" },
    { id: "numeral", name: "Numerals" },
  ];

  return (
    <main className="row">
      <div>
        <h2>Vowels</h2>
        <p>Thai vowel sounds and diphthongs are written using a mixture of vowel symbols on a consonant base. Each vowel is shown in its correct position relative to a base consonant and sometimes a final consonant as well. Vowels can go above, below, left of or right of the consonant, or combinations of these places. If a vowel has parts before and after the initial consonant, and the syllable starts with a consonant cluster, the split will go around the whole cluster.</p>
      </div>
      <div className={styles.glyphGrid}>
        <GlyphInspector />
        <GlyphList glyphs={glyphs} />
      </div>
    </main>
  )
}

import GlyphInspector from "@/components/glyph-inspector/glyph-inspector";
import GlyphList from "@/components/glyph-list/glyph-list";
import OptionsBar from "@/components/options-bar/options-bar";
import VowelTable from "@/components/vowel-table/vowel-table";
import Option from "@/shared/models/option";
import ThaiGlyph from "@/shared/models/thai-glyph";
import styles from "./page.module.css";

export default async function Vowels() {
  const res = await fetch("http://localhost:3000/api/vowels");
  const vowels: ThaiGlyph[] = await res.json();
  const long = vowels.filter((v) => v.toneClass === 'long');
  const short = vowels.filter((v) => v.toneClass === 'short');
  const family: Option[] = [
    { id: "all", name: "All" },
    { id: "short", name: "Short" },
    { id: "long", name: "Long" },
    { id: "diphthongs", name: "Diphthongs" },
    { id: "extra", name: "Extra" },
  ];

  return (
    <main className="row">
      <div>
        <h2>Vowels</h2>
        <p>Thai vowel sounds and diphthongs are written using a mixture of vowel symbols on a consonant base. Each vowel is shown in its correct position relative to a base consonant and sometimes a final consonant as well. Vowels can go above, below, left of or right of the consonant, or combinations of these places. If a vowel has parts before and after the initial consonant, and the syllable starts with a consonant cluster, the split will go around the whole cluster.</p>
      </div>
      <div>
        <OptionsBar options={family} />
      </div>
      <div className={styles.glyphGrid}>
        <GlyphInspector />
        <GlyphList glyphs={vowels} />
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
    </main>
  )
}

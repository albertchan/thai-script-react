import { notFound } from "next/navigation";
import GlyphInspector from "@/components/glyph-inspector/glyph-inspector";
import GlyphList from "@/components/glyph-list/glyph-list";
import OptionsBar from "@/components/options-bar/options-bar";
import View from "@/components/view/view";
import VowelTable from "@/components/vowel-table/vowel-table";
import ThaiGlyph from "@/shared/models/thai-glyph";
import { DEFAULT_OPTION, OPTIONS_VOWEL, VIEW_MODES } from "@/shared/constants";
import styles from "./page.module.css";

export default async function Vowels() {
  const data: ThaiGlyph[] = await import("../../data/thai-vowels.json").then((res) => res.default);
  if (!data) return notFound();

  const long = data.filter((v) => v.toneClass === 'long');
  const short = data.filter((v) => v.toneClass === 'short');
  const selectedGlyph = data[0];

  return (
    <main className="row">
      <div>
        <h2>Vowels</h2>
      </div>
      <div className="sm-order-last">
        <p>Thai vowel sounds and diphthongs are written using a mixture of vowel symbols on a consonant base. Each vowel is shown in its correct position relative to a base consonant and sometimes a final consonant as well. Vowels can go above, below, left of or right of the consonant, or combinations of these places. If a vowel has parts before and after the initial consonant, and the syllable starts with a consonant cluster, the split will go around the whole cluster.</p>
      </div>
      <div>
        <OptionsBar options={OPTIONS_VOWEL} filter={DEFAULT_OPTION} modes={VIEW_MODES} />
      </div>
      <View mode="grid">
        <div className={styles.glyphGrid}>
          <GlyphInspector selected={selectedGlyph} />
          <GlyphList glyphs={data} filter={DEFAULT_OPTION} />
        </div>
      </View>
      <View mode="table">
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
      </View>
    </main>
  );
}

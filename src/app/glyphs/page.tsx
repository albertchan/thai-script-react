import { notFound } from "next/navigation";
import GlyphInspector from "@/components/glyph-inspector/glyph-inspector";
import GlyphList from "@/components/glyph-list/glyph-list";
import OptionsBar from "@/components/options-bar/options-bar";
import Option from "@/shared/models/option";
import ThaiGlyph from "@/shared/models/thai-glyph";
import styles from "./page.module.css";

const family: Option[] = [
  { id: "all", name: "All" },
  { id: "consonant", name: "Consonants" },
  { id: "mid", name: "Consonants (Mid)" },
  { id: "high", name: "Consonants (High)" },
  { id: "low", name: "Consonants (Low)" },
  { id: "vowel", name: "Vowels" },
  { id: "numeral", name: "Numerals" },
];

export default async function Glyphs() {
  const data: ThaiGlyph[] = await import("../../data/thai-script.json").then((res) => res.default);
  if (!data) return notFound();

  // Initialize
  const filter = "all";

  return (
    <main className="row">
      <div>
        <h2>Glyphs</h2>
      </div>
      <div>
        <OptionsBar options={family} filter={filter} />
        <div className={styles.glyphGrid}>
          <GlyphInspector />
          <GlyphList glyphs={data} filter={filter} />
        </div>
      </div>
    </main>
  );
}

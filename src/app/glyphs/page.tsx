import GlyphInspector from "@/components/glyph-inspector/glyph-inspector";
import GlyphList from "@/components/glyph-list/glyph-list";
import OptionsBar from "@/components/options-bar/options-bar";
import Option from "@/shared/models/option";
import styles from "./page.module.css";

export default async function Glyphs() {
  const baseUrl = `${process.env.PROTOCOL_SCHEME}${process.env.VERCEL_URL}`;
  const res = await fetch(`${baseUrl}/api/glyphs`);
  const glyphs = await res.json();
  const family: Option[] = [
    { id: "all", name: "All" },
    { id: "consonant", name: "Consonants" },
    { id: "mid", name: "Consonants (Mid)" },
    { id: "high", name: "Consonants (High)" },
    { id: "low", name: "Consonants (Low)" },
    { id: "vowel", name: "Vowels" },
    { id: "numerals", name: "Numerals" },
  ];

  return (
    <div className={styles.page}>
      <h2>Glyphs</h2>
      <OptionsBar options={family} />
      <div className={styles.glyphGrid}>
        <GlyphInspector />
        <GlyphList glyphs={glyphs} />
      </div>
    </div>
  );
}

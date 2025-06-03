import GlyphInspector from "@/components/glyph-inspector/glyph-inspector";
import GlyphList from "@/components/glyph-list/glyph-list";
import styles from "./page.module.css";
import OptionsBar from "@/components/options-bar/options-bar";

export default async function Glyphs() {
  const res = await fetch("http://localhost:3000/api/glyphs");
  const glyphs = await res.json();

  return (
    <div className={styles.page}>
      <h2>Glyphs</h2>
      <OptionsBar />
      <div className={styles.glyphGrid}>
        <GlyphInspector />
        <GlyphList glyphs={glyphs} />
      </div>
    </div>
  );
}

import GlyphInspector from "@/components/glyph-inspector/glyph-inspector";
import GlyphList from "@/components/glyph-list/glyph-list";
import styles from "./page.module.css";

export default async function Glyphs() {
  const res = await fetch("http://localhost:3000/api/glyphs");
  const glyphs = await res.json();
  const selected = glyphs[0];

  return (
    <div className={styles.page}>
      <h2>Glyphs</h2>
      <div className={styles.glyphGrid}>
        <GlyphInspector />
        <GlyphList glyphs={glyphs} selected={selected} />
      </div>
    </div>
  );
}

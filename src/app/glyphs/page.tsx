import ThaiGlyph from "@/shared/models/thai-glyph";
import styles from "./page.module.css";

export default async function Glyphs() {
  const res = await fetch("http://localhost:3000/api/glyphs");
  const glyphs = await res.json();

  return (
    <div className={styles.page}>
      <h2>Glyphs</h2>
      <div className={styles.glyphGrid}>
        <div className={styles.inspector}>
          <div className={styles.toolbar}>

          </div>
          <div className={styles.canvas}>

          </div>
        </div>
        <div className={styles.glyphList}>
          <div className={styles.clipview}>
            <div className={styles.content}>
              {glyphs.map((g: ThaiGlyph) => 
                <a key={g.id} href={`#${g.glyph}`}>{g.glyph}</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

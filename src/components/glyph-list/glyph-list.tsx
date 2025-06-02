"use client"

import ThaiGlyph from "@/shared/models/thai-glyph";
import { useGlyphs } from "@/shared/store";
import styles from "./glyph-list.module.css";

interface GlyphListProps {
  glyphs: ThaiGlyph[]
}

export default function GlyphList({ glyphs }: GlyphListProps) {
  const { selectedId$ } = useGlyphs();

  function handleClick(id: number) {
  }

  return (
    <div className={styles.glyphList}>
      <div className={styles.clipview}>
        <div className={styles.content}>
          {glyphs.map((g: ThaiGlyph) => 
            <a key={g.id} href={`#${g.glyph}`} onClick={() => handleClick(g.id)}>{g.glyph}</a>
          )}
        </div>
      </div>
    </div>
  );
}

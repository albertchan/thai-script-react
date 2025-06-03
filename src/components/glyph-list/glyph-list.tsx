"use client"

import { useObservableState } from "observable-hooks";
import { useGlyphs } from "@/shared/store";
import ThaiGlyph from "@/shared/models/thai-glyph";
import styles from "./glyph-list.module.css";
import { useEffect } from "react";

interface GlyphListProps {
  glyphs: ThaiGlyph[],
  selected: ThaiGlyph,
}

export default function GlyphList({ glyphs }: GlyphListProps) {
  const { selectedGlyph$ } = useGlyphs();
  const selectedGlyph = useObservableState(selectedGlyph$);

  // Initial
  useEffect(() => {
    if (!selectedGlyph$.value) {
      selectedGlyph$.next(glyphs[0]);
    }
  })

  function handleClick(glyph: ThaiGlyph) {
    selectedGlyph$.next(glyph)
  }

  return (
    <div className={styles.glyphList}>
      <div className={styles.clipview}>
        <div className={styles.content}>
          {glyphs.map((g: ThaiGlyph) => 
            <a key={g.id}
               href={`#${g.glyph}`}
               className={`${g.toneClass} ${selectedGlyph?.id == g.id ? 'active' : ''}`}
               onClick={() => handleClick(g)}
            >
              {g.glyph}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

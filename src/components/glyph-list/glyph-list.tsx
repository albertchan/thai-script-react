"use client"

import { useEffect } from "react";
import { map } from "rxjs";
import { useObservableState } from "observable-hooks";
import { useGlyphs, useOptions } from "@/shared/store";
import ThaiGlyph from "@/shared/models/thai-glyph";
import styles from "./glyph-list.module.css";

interface GlyphListProps {
  glyphs: ThaiGlyph[],
}

export default function GlyphList({ glyphs }: GlyphListProps) {
  const CONSONANT_CLASS_LIST = ['low', 'mid', 'high'];
  const { selectedGlyph$ } = useGlyphs();
  const { selectedFamily$ } = useOptions();
  const selectedGlyph = useObservableState(selectedGlyph$);

  // Initialize
  useEffect(() => {
    if (!selectedGlyph$.value) {
      selectedGlyph$.next(glyphs[0]);
    }
  });

  const [filteredGylphs] = useObservableState(() =>
    selectedFamily$.pipe(
      map((selected) => glyphs.filter((g) => {
        if (selected === 'all' || selected === undefined) {
          return true;
        }

        return CONSONANT_CLASS_LIST.includes(selected)
          ? g.toneClass === selected
          : g.phonemeType === selected;
      })),
    ),
    []
  );

  function handleClick(glyph: ThaiGlyph) {
    selectedGlyph$.next(glyph)
  }

  return (
    <div className={styles.glyphList}>
      <div className={styles.clipview}>
        <div className={styles.content}>
          {filteredGylphs.map((g: ThaiGlyph) => 
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
      <div className={styles.meta}>Count: {filteredGylphs.length}</div>
    </div>
  );
}

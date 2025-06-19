"use client"

import { useEffect, useState } from "react";
import { useObservableState } from "observable-hooks";
import { useGlyphs, useOptions } from "@/shared/store";
import ThaiGlyph from "@/shared/models/thai-glyph";
import styles from "./glyph-list.module.css";

interface GlyphListProps {
  glyphs: ThaiGlyph[],
  filter?: string,
}

export default function GlyphList({ glyphs, filter }: GlyphListProps) {
  const CONSONANT_CLASS_LIST = ['low', 'mid', 'high'];
  const OTHERS_CLASS_LIST = ['diacritic', 'short', 'long', 'diphthongs', 'extra', 'numeral', 'consonant', 'vowel'];

  const { selectedGlyph$ } = useGlyphs();
  const { selectedFamily$, selectedSound$ } = useOptions();
  const selected = useObservableState(selectedFamily$, filter);
  const selectedSound = useObservableState(selectedSound$);
  const selectedGlyph = useObservableState(selectedGlyph$);
  const [filteredGlyphs, setFilteredGlyphs] = useState(glyphs);

  useEffect(() => {
    const _glyphs = glyphs.filter((g) => {
      if (selected === 'all' || selected === undefined) {
        return true;
      }

      if (CONSONANT_CLASS_LIST.includes(selected)) {
        return g.toneClass === selected; 
      }

      if (OTHERS_CLASS_LIST.includes(selected)) {
        return g.toneClass === selected || g.type === selected;
      }
    });

    setFilteredGlyphs(_glyphs.map((g) => ({
      ...g,
      isGroup: g.soundStart === selectedSound,
    })));
    selectedGlyph$.next(_glyphs[0]);
  }, [selected, selectedSound]);

  return (
    <div className={styles.glyphList}>
      <div className={styles.clipview}>
        <div className={styles.content}>
          {filteredGlyphs.map((g: ThaiGlyph) => 
            <a key={g.id}
               href={`#${g.glyph}`}
               className={`${g.toneClass} ${selectedGlyph?.id == g.id ? 'active' : ''} ${g.isGroup ? 'highlight' : ''}`}
               onClick={() => selectedGlyph$.next(g)}
            >
              {g.glyph}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

"use client"

import { BehaviorSubject, combineLatestWith, map } from "rxjs";
import { useObservableState } from "observable-hooks";
import { useGlyphs, useOptions } from "@/shared/store";
import ThaiGlyph from "@/shared/models/thai-glyph";
import styles from "./glyph-list.module.css";

interface GlyphListProps {
  glyphs: ThaiGlyph[],
  filter?: string,
}

export default function GlyphList({ glyphs }: GlyphListProps) {
  const CONSONANT_CLASS_LIST = ['low', 'mid', 'high'];
  const VOWEL_CLASS_LIST = ['diacritic', 'short', 'long', 'diphthongs', 'extra'];
  const { selectedGlyph$ } = useGlyphs();
  const { selectedFamily$, selectedSound$ } = useOptions();
  const glyphs$ = new BehaviorSubject<ThaiGlyph[]>([]);
  const selectedGlyph = useObservableState(selectedGlyph$);

  const filterFamily = map(([glyphs, selected]) => glyphs.filter((g: ThaiGlyph) => {
    if (selected === 'all' || selected === undefined) {
      return true;
    }

    if (CONSONANT_CLASS_LIST.includes(selected)) {
      return g.toneClass === selected; 
    }

    if (VOWEL_CLASS_LIST.includes(selected)) {
      return g.toneClass === selected || g.type === selected;
    }
  }));

  const filterSound = map(([selected, glyphs]) =>
    glyphs.map((g: ThaiGlyph) => ({
      ...g,
      isGroup: g.soundStart === selected,
    })
  ));

  const resetSelected = map((glyphs: ThaiGlyph[]) => {
    selectedGlyph$.next(glyphs[0])
    return glyphs;
  });

  const filteredGlyphs$ = glyphs$.pipe(
    combineLatestWith(selectedFamily$),
    filterFamily,
    resetSelected,
  );

  const [filteredGlyphs] = useObservableState(() =>
    selectedSound$.pipe(
      combineLatestWith(filteredGlyphs$),
      filterSound,
    ),
    []
  );

  glyphs$.next(glyphs);

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

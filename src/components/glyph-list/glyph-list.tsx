"use client"

import { useObservableState } from "observable-hooks";
import ThaiGlyph from "@/shared/models/thai-glyph";
import { useGlyphs } from "@/shared/store";
import styles from "./glyph-list.module.css";

// interface GlyphListProps {
//   glyphs: ThaiGlyph[]
// }

// export default function GlyphList({ glyphs }: GlyphListProps) {
export default function GlyphList() {
  const { listGlyph$, selectedId$, selectedGlyph$ } = useGlyphs();
  const glyphs = useObservableState(listGlyph$);
  const selectedId = useObservableState(selectedId$);

  if (glyphs.length > 0) {
    selectedGlyph$.next(glyphs[selectedId$.value]);
  }

  function handleClick(glyph: ThaiGlyph) {
    selectedId$.next(glyph.id)
    selectedGlyph$.next(glyph)
  }

  return (
    <div className={styles.glyphList}>
      <div className={styles.clipview}>
        <div className={styles.content}>
          {glyphs.map((g: ThaiGlyph) => 
            <a key={g.id}
               href={`#${g.glyph}`}
               className={selectedId == g.id ? 'active' : undefined}
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

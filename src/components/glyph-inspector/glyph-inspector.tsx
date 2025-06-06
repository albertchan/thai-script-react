"use client"

import { useGlyphs, useOptions } from "@/shared/store";
import styles from "./glyph-inspector.module.css";
import { useObservableState } from "observable-hooks";
import ThaiGlyph from "@/shared/models/thai-glyph";

export default function GlyphInspector() {
  const { selectedGlyph$ } = useGlyphs();
  const { selectedSound$ } = useOptions();
  const glyph = useObservableState(selectedGlyph$);

  function handleSoundStartClick(glyph: ThaiGlyph | undefined) {
    if (glyph) {
      selectedSound$.next(glyph.soundStart);
    }
  }

  return (
    <div className={styles.inspector}>
      <div className={styles.toolbar}>
        <div className={styles.details}>
          <div className={styles.name}>{glyph?.name}</div>
          <div className={styles.transcript}>{glyph?.transcript}</div>
        </div>
        <div className={styles.identification}>
          <div className={styles.unicode}>{glyph?.unicode}</div>
          <div className={styles.description}>{glyph?.description}</div>
        </div>
      </div>
      <div className={styles.canvas}>
        <div className={styles.toneClass}>
          <div className={styles.tone}>{glyph?.toneClass}</div> 
          <div className={styles.sound}>
            <button type="button" className={styles.soundButton} onClick={() => handleSoundStartClick(glyph)}>{glyph?.soundStart}</button>
            {glyph?.soundEnd ? `, ${glyph.soundEnd}` : ''}
          </div> 
        </div>
        <div className={styles.glyph}>{glyph?.glyph}</div>
        <div className={styles.name}>{glyph?.name}</div>
        <div className={styles.transcript}>{glyph?.transcript}</div>
      </div>
    </div>
  );
}

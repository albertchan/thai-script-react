"use client"

import { useObservableState } from "observable-hooks";
import { useGlyphs, useOptions } from "@/shared/store";
import ThaiGlyph from "@/shared/models/thai-glyph";
import Sound from "../sound/sound";
import styles from "./glyph-inspector.module.css";

interface GlyphInspectorProps {
  selected?: ThaiGlyph,
}

export default function GlyphInspector({ selected }: GlyphInspectorProps) {
  const { selectedGlyph$ } = useGlyphs();
  const { selectedSound$ } = useOptions();

  // Initialize
  const glyph = useObservableState(selectedGlyph$, selected);

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
        <div className={styles.soundButton}>
          <Sound src={glyph?.url} />
        </div>
        <div className={styles.toneClass}>
          <div className={styles.tone}>{glyph?.toneClass}</div> 
          <div className={styles.sound}>
            <button type="button" className={styles.toneButton} onClick={() => handleSoundStartClick(glyph)}>{glyph?.soundStart}</button>
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

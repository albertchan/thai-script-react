"use client"

import { useGlyphs } from "@/shared/store";
import styles from "./glyph-inspector.module.css";
import { useObservableState } from "observable-hooks";

export default function GlyphInspector() {
  const { selectedGlyph$ } = useGlyphs();
  const glyph = useObservableState(selectedGlyph$);

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
          <div className={styles.sound}>{glyph?.soundStart}, {glyph?.soundEnd}</div> 
        </div>
        <div className={styles.glyph}>{glyph?.glyph}</div>
        <div className={styles.name}>{glyph?.name}</div>
        <div className={styles.transcript}>{glyph?.transcript}</div>
      </div>
    </div>
  );
}

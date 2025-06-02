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
      </div>
      <div className={styles.canvas}>
        {glyph?.glyph}
      </div>
    </div>
  );
}

"use client"

import { useGlyphs } from "@/shared/store";
import styles from "./glyph-inspector.module.css";

export default function GlyphInspector() {
  const { selectedId$ } = useGlyphs();

  return (
    <div className={styles.inspector}>
      <div className={styles.toolbar}>
      </div>
      <div className={styles.canvas}>

      </div>
    </div>
  );
}

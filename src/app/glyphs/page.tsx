"use client"

import dynamic from 'next/dynamic';
import styles from "./page.module.css";

const GlyphInspector = dynamic(() => import("@/components/glyph-inspector/glyph-inspector"), { ssr: false });
const GlyphList = dynamic(() => import("@/components/glyph-list/glyph-list"), { ssr: false });

export default function Glyphs() {
  // const res = await fetch("http://localhost:3000/api/glyphs");
  // const glyphs = await res.json();

  return (
    <div className={styles.page}>
      <h2>Glyphs</h2>
      <div className={styles.glyphGrid}>
        <GlyphInspector />
        <GlyphList />
        {/* <GlyphList glyphs={glyphs} /> */}
      </div>
    </div>
  );
}

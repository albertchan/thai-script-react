import { notFound } from "next/navigation";
import GlyphInspector from "@/components/glyph-inspector/glyph-inspector";
import GlyphList from "@/components/glyph-list/glyph-list";
import OptionsBar from "@/components/options-bar/options-bar";
import ThaiGlyph from "@/shared/models/thai-glyph";
import { DEFAULT_OPTION, OPTIONS_GLYPH } from "@/shared/constants";
import styles from "./page.module.css";

export default async function Glyphs() {
  const data: ThaiGlyph[] = await import("../../data/thai-script.json").then((res) => res.default);
  if (!data) return notFound();

  return (
    <main className="row">
      <div>
        <h2>Glyphs</h2>
      </div>
      <div>
        <OptionsBar options={OPTIONS_GLYPH} filter={DEFAULT_OPTION} />
        <div className={styles.glyphGrid}>
          <GlyphInspector />
          <GlyphList glyphs={data} filter={DEFAULT_OPTION} />
        </div>
      </div>
    </main>
  );
}

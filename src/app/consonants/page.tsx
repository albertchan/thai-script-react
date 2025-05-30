import { notFound } from "next/navigation";
import GlyphInspector from "@/components/glyph-inspector/glyph-inspector";
import GlyphList from "@/components/glyph-list/glyph-list";
import OptionsBar from "@/components/options-bar/options-bar";
import Option from "@/shared/models/option";
import ThaiGlyph from "@/shared/models/thai-glyph";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const family: Option[] = [
  { id: "all", name: "All" },
  { id: "mid", name: "Mid" },
  { id: "high", name: "High" },
  { id: "low", name: "Low" },
];

export default async function Consonants() {
  const data: ThaiGlyph[] = await import("../../data/thai-script.json").then((res) => res.default);
  if (!data) return notFound();

  // Initialize
  const filter = "all";

  return (
    <main className="row">
      <div>
        <h2>Consonants</h2>
        <p>There are 44 consonant letters representing 21 distinct consonant sounds. Duplicate consonants either correspond to sounds that existed in Old Thai at the time the alphabet was created but no longer exist.</p>
        <p>Consonants are divided into three classes: middle (กลาง, klang), high (สูง, sung), and low (ต่ำ, tam) class. These class designations reflect phonetic qualities of the sounds to which the letters originally corresponded in Old Thai.</p>
        <p>To aid learning, each consonant is traditionally associated with an acrophonic Thai word that either starts with the same sound, or features it prominently. For example, the name of the letter ข is kho khai (ข ไข่), in which kho is the sound it represents, and khai (ไข่) is a word which starts with the same sound and means &quot;egg&quot;.</p>
      </div>
      <div>
        <OptionsBar options={family} filter={filter} />
      </div>
      <div className={styles.glyphGrid}>
        <GlyphInspector selected={data[0]} />
        <GlyphList glyphs={data} filter={filter} />
      </div>
    </main>
  );
}

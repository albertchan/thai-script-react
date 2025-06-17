import ThaiGlyph from "@/shared/models/thai-glyph";
import styles from "./vowel-table.module.css";

interface VowelTableProps {
  vowels: ThaiGlyph[],
}

export default function VowelTable({ vowels }: VowelTableProps) {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Symbol</th>
          <th>Transcript</th>
          <th>English Approximation</th>
        </tr>
        {vowels.map((l: ThaiGlyph) =>
          <tr key={l.id}>
            <td className={styles.glyph}>{l.glyph}</td>
            <td>{l.transcript}</td>
            <td>{l.description}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

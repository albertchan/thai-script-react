import ThaiVowel from "@/shared/models/thai-vowel";
import styles from "./vowel-table.module.css";

interface VowelTableProps {
  vowels: ThaiVowel[],
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
        {vowels.map((l: ThaiVowel) =>
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

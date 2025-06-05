"use client"

import { useOptions } from "@/shared/store";
import styles from "./options-bar.module.css";

export default function OptionsBar() {
  const { selectedFamily$ } = useOptions();
  const family = [
    { id: "all", name: "All" },
    { id: "consonant", name: "Consonants" },
    { id: "mid", name: "Consonants (Mid)" },
    { id: "high", name: "Consonants (High)" },
    { id: "low", name: "Consonants (Low)" },
    { id: "vowel", name: "Vowels" },
    { id: "numeral", name: "Numerals" },
  ];

  // Initialize
  selectedFamily$.next(family[0].id)

  function handleChange(selected: string) {
    selectedFamily$.next(selected)
  }

  return (
    <div className={styles.options}>
      <label>
        <span>Family</span>
        <select name="family" onChange={(e) => handleChange(e.target.value)}>
          {family.map((f) =>
            <option key={f.id} value={f.id}>{f.name}</option>
          )}
        </select>
      </label>
    </div>
  );
}

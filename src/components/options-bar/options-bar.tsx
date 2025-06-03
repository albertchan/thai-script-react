"use client"

import { useOptions } from "@/shared/store";
import styles from "./options-bar.module.css";

export default function OptionsBar() {
  const { selectedFamily$ } = useOptions();
  const family = [
    { id: "all", name: "All" },
    { id: "consonant", name: "Consonants" },
    { id: "vowels", name: "Vowesl" },
    { id: "low", name: "Low" },
    { id: "mid", name: "Mid" },
    { id: "high", name: "High" },
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

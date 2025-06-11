"use client"

import { useGlyphs, useOptions } from "@/shared/store";
import Option from "@/shared/models/option";
import styles from "./options-bar.module.css";
import { useEffect } from "react";

interface OptionsBarProps {
  options: Option[],
}

export default function OptionsBar({ options }: OptionsBarProps) {
  const { selectedGlyphIndex$ } = useGlyphs();
  const { selectedFamily$, selectedSound$ } = useOptions();

  function handleChange(selected: string) {
    selectedFamily$.next(selected)
  }

  function handleReset() {
    selectedGlyphIndex$.next(0);
    selectedFamily$.next(undefined)
    selectedSound$.next(undefined)
  }

  useEffect(() => {
    // router.events.on('routeChangeComplete', handleReset)
  });

  return (
    <div className={styles.options}>
      <label>
        <span>Family</span>
        <select name="family" onChange={(e) => handleChange(e.target.value)}>
          {options.map((f) =>
            <option key={f.id} value={f.id}>{f.name}</option>
          )}
        </select>
      </label>
      <label>
        <button type="button" onClick={handleReset}>Reset</button>
      </label>
    </div>
  );
}

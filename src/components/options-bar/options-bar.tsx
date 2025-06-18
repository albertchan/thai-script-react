"use client"

import { useGlyphs, useOptions } from "@/shared/store";
import Toggle from "@/components/toggle/toggle";
import Option from "@/shared/models/option";
import ToggleMode from "@/shared/models/toggle-mode";
import styles from "./options-bar.module.css";

interface OptionsBarProps {
  options: Option[],
  filter: string,
  modes?: ToggleMode[],
  mode?: string,
}

export default function OptionsBar({ options, filter, modes, mode }: OptionsBarProps) {
  const { selectedGlyphIndex$ } = useGlyphs();
  const { selectedFamily$, selectedSound$, selectedMode$ } = useOptions();
  
  // Set initial view mode
  if (mode) {
    selectedMode$.next(mode);
  }
  selectedFamily$.next(filter);

  function handleChange(selected: string) {
    selectedFamily$.next(selected)
  }

  function handleReset() {
    selectedGlyphIndex$.next(0);
    selectedSound$.next(undefined)
  }

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
      <div className={styles.modes}>
        {modes && <Toggle modes={modes} mode={mode} />}
      </div>
    </div>
  );
}

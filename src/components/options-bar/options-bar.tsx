"use client"

import { useEffect, useRef } from "react";
import { useGlyphs, useOptions } from "@/shared/store";
import Toggle from "@/components/toggle/toggle";
import Option from "@/shared/models/option";
import ToggleMode from "@/shared/models/toggle-mode";
import { useObservableState } from "observable-hooks";
import { DEFAULT_VIEW_MODE } from "@/shared/constants";
import styles from "./options-bar.module.css";

interface OptionsBarProps {
  options: Option[],
  filter: string,
  modes?: ToggleMode[],
  mode?: string,
}

export default function OptionsBar({ options, filter, modes, mode }: OptionsBarProps) {
  const modeRef = useRef(mode);
  const filterRef = useRef(filter);
  const { selectedGlyphIndex$ } = useGlyphs();
  const { selectedFamily$, selectedSound$, selectedMode$ } = useOptions();
  const selectedFamily = useObservableState(selectedFamily$, filter);
  
  // Initialize
  useEffect(() => {
    selectedMode$.next(modeRef.current || DEFAULT_VIEW_MODE);
  }, [selectedMode$])

  useEffect(() => {
    selectedFamily$.next(filterRef.current);
  }, [selectedFamily$]);

  function handleChange(selected: string) {
    selectedFamily$.next(selected)
  }

  function handleReset() {
    selectedGlyphIndex$.next(0);
    selectedFamily$.next("all");
    selectedSound$.next(undefined);
  }

  return (
    <div className={styles.options}>
      <label>
        <span>Family</span>
        <select name="family" value={selectedFamily} onChange={(e) => handleChange(e.target.value)}>
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

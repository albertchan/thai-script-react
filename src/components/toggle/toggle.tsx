"use client"

import { useState } from "react";
import ToggleMode from "@/shared/models/toggle-mode";
import styles from "./toggle.module.css";
import { useOptions } from "@/shared/store";

interface ToggleProps {
  modes: ToggleMode[],
  mode?: string,
  size?: 'small' | 'medium' | 'large',
}

export default function Toggle({ modes = [], mode, size = "small" }: ToggleProps) {
  const { selectedMode$ } = useOptions();
  const [index, setIndex] = useState(mode ? modes.findIndex((m) => m.id === mode) : 0);

  function toggleChange() {
    const newIndex = index === 0 ? 1 : 0;
    setIndex(newIndex);
    selectedMode$.next(modes[newIndex]?.id);
  }

  return (
    <label className={`${styles.toggle} toggle-${size}`}>
      <span className={styles.text}>{modes[0]?.label}</span>
      <input className={styles.input} type="checkbox" defaultChecked={index === 1} onChange={toggleChange} />
      <span className={styles.text}>{modes[1]?.label}</span>
    </label>
  );
}

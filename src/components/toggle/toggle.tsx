"use client"

import { useState } from "react";
import ToggleMode from "@/shared/models/toggle-mode";
import styles from "./toggle.module.css";
import { useOptions } from "@/shared/store";

interface ToggleProps {
  modes: ToggleMode[],
  checked?: string,
  size?: 'small' | 'medium' | 'large',
}

export default function Toggle({ modes = [], checked, size = "small" }: ToggleProps) {
  const { selectedMode$ } = useOptions();
  const isChecked = modes.length > 0 ? checked === modes[1].label : false;
  const [index, setIndex] = useState(checked ? modes.findIndex((m) => m.id === checked) : 0);

  function toggleChange() {
    setIndex(index === 0 ? 1 : 0);
    selectedMode$.next(modes[index]?.id);
  }

  return (
    <label className={`${styles.toggle} toggle-${size}`}>
      <span className={styles.text}>{modes[0]?.label}</span>
      <input className={styles.input} type="checkbox" defaultChecked={isChecked} onChange={toggleChange} />
      <span className={styles.text}>{modes[1]?.label}</span>
    </label>
  );
}

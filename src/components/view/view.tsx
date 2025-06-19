"use client"

import { Children, PropsWithChildren } from 'react';
import { useObservableState } from 'observable-hooks';
import { useOptions } from '@/shared/store';
import styles from "./view.module.css";

interface ViewProps extends PropsWithChildren {
  mode: string,
}

export default function View({ children, mode }: ViewProps) {
  const result = Children.toArray(children);
  const { selectedMode$ } = useOptions();
  const selected = useObservableState(selectedMode$);

  return selected === mode ? (
    <div className={styles.view}>
      {result}
    </div>
  ) : null;
}

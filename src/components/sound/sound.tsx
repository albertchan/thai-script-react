"use client"

import { useEffect, useRef, useState } from "react";
import IconVolume from "./icon-volume";

interface SoundProps {
  src?: string,
}

export default function Sound({ src }: SoundProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const stop = () => setPlaying(false);

  useEffect(() => {
    if (playing) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [playing])

  useEffect(() => {
    const newAudio = new Audio(src);
    audioRef.current = newAudio;
    newAudio.addEventListener('ended', () => stop());
    return () => newAudio.removeEventListener('end', () => stop());
  }, [src])

  function toggleAudio() {
    setPlaying(!playing);
  }

  return (
    <IconVolume onClick={() => toggleAudio()} />
  );
}
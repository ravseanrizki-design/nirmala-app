"use client";

import { useEffect } from "react";

export default function BackgroundMusic() {
  useEffect(() => {
    const startMusic = () => {
      const audio = document.getElementById(
        "nirmala-music"
      ) as HTMLAudioElement;

      if (audio) {
        audio.volume = 0.2;
        audio.play().catch(() => {});
      }

      window.removeEventListener(
        "click",
        startMusic
      );
    };

    window.addEventListener(
      "click",
      startMusic
    );

    return () =>
      window.removeEventListener(
        "click",
        startMusic
      );
  }, []);

  return (
    <audio
      id="nirmala-music"
      src="/rain.mp3"
      loop
    />
  );
}
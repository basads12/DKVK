"use client";

import { useEffect, useRef } from "react";

export function ChequeDecorativeAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const setSlowerPlayback = () => {
      video.playbackRate = 0.6;
    };
    setSlowerPlayback();
    video.addEventListener("loadedmetadata", setSlowerPlayback);
    return () => video.removeEventListener("loadedmetadata", setSlowerPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/Video/web/vrouw-met-schilderij-poster.png?v=2"
      role="img"
      aria-label="Een vrouw houdt een doek vast waarop werken uit de galerie verschijnen."
      className="h-auto w-full"
    >
      <source src="/Video/web/vrouw-met-schilderij.webm?v=2" type="video/webm" />
      <source src="/Video/web/vrouw-met-schilderij-alpha.mp4?v=2" type='video/mp4; codecs="hvc1"' />
    </video>
  );
}

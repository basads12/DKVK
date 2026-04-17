"use client";

import { useEffect, useRef } from "react";

export function ChequeDecorativeAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const stopLoop = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const setSlowerPlayback = () => {
      video.playbackRate = 0.0875;
    };

    const drawFrame = () => {
      const width = video.videoWidth;
      const height = video.videoHeight;
      if (!width || !height) {
        rafRef.current = requestAnimationFrame(drawFrame);
        return;
      }

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.drawImage(video, 0, 0, width, height);
      const frame = ctx.getImageData(0, 0, width, height);
      const pixels = frame.data;

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        // Remove green matte from non-alpha exports.
        const greenDominance = g - Math.max(r, b);
        if (g > 50 && greenDominance > 20) {
          const alphaFalloff = Math.min(255, Math.max(0, 255 - greenDominance * 7));
          pixels[i + 3] = alphaFalloff;
        }
      }

      ctx.putImageData(frame, 0, 0);
      rafRef.current = requestAnimationFrame(drawFrame);
    };

    const onPlay = () => {
      stopLoop();
      rafRef.current = requestAnimationFrame(drawFrame);
    };

    setSlowerPlayback();
    video.addEventListener("loadedmetadata", setSlowerPlayback);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", stopLoop);
    video.addEventListener("ended", stopLoop);

    video.play().catch(() => {
      // Autoplay can be blocked before user interaction.
    });

    return () => {
      stopLoop();
      video.removeEventListener("loadedmetadata", setSlowerPlayback);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", stopLoop);
      video.removeEventListener("ended", stopLoop);
    };
  }, []);

  return (
    <div
      role="img"
      aria-label="Een vrouw houdt een doek vast waarop werken uit de galerie verschijnen."
      className="overflow-hidden rounded-2xl bg-sand"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/Video/web/vrouw-met-schilderij-poster.png?v=3"
        className="hidden"
      >
        <source src="/Video/web/vrouw-met-schilderij.webm?v=3" type="video/webm" />
      </video>
      <canvas ref={canvasRef} className="h-auto w-full" />
    </div>
  );
}

"use client";

import { useRef, useEffect } from "react";

export default function SakuraBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const spawnPetal = (x: number, y: number) => {
    const container = containerRef.current;
    if (!container) return;

    const petal = document.createElement("div");
    petal.className = "sakura-petal";

    // randomize size and animation duration
    const size = Math.random() * 10 + 8; // 8 - 18px
    const duration = Math.random() * 2 + 3; // 3 - 5s
    const delay = Math.random() * 0.5; // small delay

    petal.style.width = `${size}px`;
    petal.style.height = `${Math.max(6, size - 4)}px`;
    petal.style.left = `${x}px`;
    petal.style.top = `${y}px`;
    petal.style.opacity = `${0.85 - Math.random() * 0.4}`;
    petal.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;

    container.appendChild(petal);

    petal.addEventListener("animationend", () => {
      petal.remove();
    });
  };

  useEffect(() => {
    console.log("SakuraBackground mounted");
    const handler = (ev: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const cx = ev.clientX - rect.left;
      const cy = ev.clientY - rect.top;

      const count = 8 + Math.floor(Math.random() * 8);
      for (let i = 0; i < count; i++) {
        const rx = cx + (Math.random() - 0.5) * 80;
        const ry = cy + (Math.random() - 0.5) * 40;
        spawnPetal(rx, ry);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div ref={containerRef} className="sakura-container -z-10" aria-hidden>
      <div className="sakura-tree" aria-hidden />
    </div>
  );
}

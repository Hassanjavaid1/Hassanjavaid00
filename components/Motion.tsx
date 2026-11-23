"use client";

import { useEffect, useRef } from "react";

// Keep the content server-rendered. Enhance it after hydration when motion is enabled.
export function Motion() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const field = canvas.current;
    const brush = field?.getContext("2d");
    if (!field || !brush) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pointer: { x: number; y: number } | undefined;
    let frame = 0;

    function draw() {
      if (!field || !brush) return;
      frame = 0;
      const width = field.clientWidth, height = field.clientHeight;
      const ratio = Math.min(window.devicePixelRatio, 2);
      if (field.width !== Math.round(width * ratio) || field.height !== Math.round(height * ratio)) {
        field.width = Math.round(width * ratio);
        field.height = Math.round(height * ratio);
      }
      brush.setTransform(ratio, 0, 0, ratio, 0, 0);
      brush.clearRect(0, 0, width, height);
      brush.fillStyle = getComputedStyle(field).color;
      brush.beginPath();
      for (let y = 20; y < height; y += 48) {
        for (let x = 20; x < width; x += 48) {
          const dx = pointer ? x - pointer.x : 0;
          const dy = pointer ? y - pointer.y : 0;
          const distance = Math.hypot(dx, dy);
          const shift = motion.matches ? 0 : 7 * Math.max(0, 1 - distance / 115) ** 2 / (distance || 1);
          const cx = x + dx * shift, cy = y + dy * shift;
          brush.moveTo(cx + 0.82, cy);
          brush.arc(cx, cy, 0.82, 0, 2 * Math.PI);
        }
      }
      brush.fill();
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(draw); }
    function move(e: PointerEvent) {
      if (motion.matches || e.pointerType === "touch") return;
      pointer = { x: e.clientX, y: e.clientY };
      schedule();
    }
    function leave() { pointer = undefined; schedule(); }
    const root = document.documentElement;
    const themeObserver = new MutationObserver(schedule);
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reveal = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("arrived");
        reveal?.unobserve(entry.target);
      }
    }, { threshold: 0.08 }) : null;
    for (const item of items) {
      if (reveal && item.getBoundingClientRect().top >= innerHeight) item.classList.add("awaiting");
      reveal?.observe(item);
    }
    window.addEventListener("resize", schedule);
    window.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerleave", leave);
    motion.addEventListener("change", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      reveal?.disconnect();
      items.forEach(item => item.classList.remove("awaiting", "arrived"));
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", leave);
      motion.removeEventListener("change", schedule);
    };
  }, []);
  return <canvas ref={canvas} aria-hidden="true" className="dot-field" />;
}

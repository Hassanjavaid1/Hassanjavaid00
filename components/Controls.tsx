"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.dataset.theme === "dark"); }, []);
  function toggle() {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    setDark(theme === "dark");
    try { localStorage.setItem("hassan-theme", theme); } catch { /* Storage can be disabled. */ }
  }
  return <button className="theme" aria-label="Dark theme" aria-pressed={dark} title="Toggle dark theme" onClick={toggle}>
    <span aria-hidden="true">◐</span>
  </button>;
}

export function EmailLink({ email }: { email: string }) {
  return <a href={"mailto:" + email} title="Send email" className="email ml-auto" target="_blank" rel="noopener noreferrer">
    {email}
  </a>;
}

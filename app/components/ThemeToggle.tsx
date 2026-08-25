"use client";

import { useEffect, useState } from "react";

const SUN_RAYS = [
  "M19.5 12L23.3 12",
  "M12 19.5L12 23.3",
  "M4.5 12L0.7 12",
  "M12 4.5L12 0.7",
  "M17.3 17.3L21.4 21.4",
  "M6.7 6.7L2.6 2.6",
  "M6.7 17.3L2.6 21.4",
  "M17.3 6.7L21.4 2.6",
];

function Sun() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4.5" />
      {SUN_RAYS.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

function Moon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <mask id="moon-mask">
        <rect width="24" height="24" fill="#fff" />
        <circle cx="9.5" cy="8.5" r="8.5" fill="#000" />
      </mask>
      <circle cx="12" cy="12" r="9" mask="url(#moon-mask)" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={dark ? "الوضع الفاتح" : "الوضع الداكن"}
      title={dark ? "الوضع الفاتح" : "الوضع الداكن"}
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}

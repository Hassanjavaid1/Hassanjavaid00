import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: {
    ink: "var(--ink)", muted: "var(--muted)", rule: "var(--rule)", pill: "var(--pill)"
  } } }
} satisfies Config;

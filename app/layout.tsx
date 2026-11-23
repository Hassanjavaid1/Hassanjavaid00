import type { Metadata } from "next";
import { profile } from "../data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.name + " · " + profile.role,
  description: "Hassan Javaid’s full-stack development work, expertise, and experience in Karachi.",
};

// Apply the saved preference before paint. First visits follow the device, with dark as the fallback.
const initialTheme = `
  let savedTheme;
  try { savedTheme = localStorage.getItem("hassan-theme"); } catch {}
  const deviceTheme = window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
  document.documentElement.dataset.theme =
    savedTheme === "light" || savedTheme === "dark" ? savedTheme : deviceTheme;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-theme="light" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: initialTheme }} /></head>
    <body>{children}</body>
  </html>;
}

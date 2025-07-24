import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export default function useDarkMode(): [Theme, (theme: Theme) => void] {
  const [theme, setTheme] = useState<Theme>("system");

  // Charger le thème sauvegardé au montage
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "light" || saved === "dark" || saved === "system") {
      setTheme(saved);
    }
  }, []);

  // Appliquer la classe dark en fonction du thème
  useEffect(() => {
    const root = window.document.documentElement;

    function applyTheme(t: Theme) {
      if (t === "system") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.toggle("dark", isDark);
      } else {
        root.classList.toggle("dark", t === "dark");
      }
    }

    applyTheme(theme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => {
        root.classList.toggle("dark", e.matches);
      };
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }

    return;
  }, [theme]);

  // Sauvegarder le choix utilisateur
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

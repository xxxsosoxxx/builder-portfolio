import React from "react";
import useDarkMode from "../../hooks/usedarkmode";

export default function DarkModeToggle() {
  const [theme, setTheme] = useDarkMode();

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="theme-select" className="font-medium">
        Thème :
      </label>
      <select
        id="theme-select"
        value={theme}
        onChange={e => setTheme(e.target.value as "light" | "dark" | "system")}
        className="rounded border px-2 py-1"
      >
        <option value="system">Système</option>
        <option value="light">Clair</option>
        <option value="dark">Sombre</option>
      </select>
    </div>
  );
}

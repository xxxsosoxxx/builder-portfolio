import { Moon, Sun } from "lucide-react"; // ou tes icônes préférées
import useDarkMode from "../../hooks/usedarkmode";

export default function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="p-2 transition">
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}


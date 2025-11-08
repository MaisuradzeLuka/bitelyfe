"use client";

import { useTheme } from "next-themes";
import { LuMoon } from "react-icons/lu";
import { FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="transition-colors cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <LuMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
};

export default ThemeToggle;

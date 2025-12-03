import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load stored theme on mount
  useEffect(() => {
    // Check system preference first
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:scale-110 focus:outline-none shadow-lg"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-primary transition-transform duration-300 hover:rotate-180" />
      ) : (
        <Moon className="h-6 w-6 text-primary transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};

import { useEffect, useState } from "react";

export default function ToggleThemeButton() {
        const [theme, setTheme] = useState(() => {
        if(typeof window != "undefined") {
            const storedTheme = window.localStorage.getItem("theme");
            if(storedTheme) return storedTheme;
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return "light"
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

  return (
    <button
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background-dark"
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label="Alternar tema"
    >
      <span className="material-icons text-sm">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}

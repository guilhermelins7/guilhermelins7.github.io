import { useEffect, useState } from "react";
import NavItem from "../components/NavItem";

export default function Header() {
    const links = [
        { label: "Home", href: "#home" },
        { label: "Sobre", href: "#sobre" },
        { label: "Trabalho", href: "#trabalho" },
        { label: "Experiencia", href: "#experiencia" },
        { label: "Skills", href: "#skills" },
        { label: "Entre em contato", href: "#contato" },
    ];

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
    <header>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-[#20131F]/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg flex items-center gap-8">
        {links.map((link) => (
            <NavItem
                label={link.label}
                href={link.href}
            />
        ))}
        <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            id="theme-toggle"
            onClick={toggleTheme}
        >
            <span className="material-icons text-sm">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
        </button>
      </nav>
    </header>
  );
}

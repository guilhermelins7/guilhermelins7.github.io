import { useEffect, useState } from "react";
import NavItem from "../components/NavItem";
import ToggleThemeButton from "../components/ToggleThemeButton";

export default function Header() {
    const links = [
        { label: "Home", href: "#home" },
        { label: "Sobre", href: "#sobre" },
        { label: "Experiencia", href: "#experiencia" },
        { label: "Trabalho", href: "#trabalho" },
        { label: "Skills", href: "#skills" },
        { label: "Contato", href: "#contato" },
    ];

    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        const sections = ["home", "sobre", "experiencia", "trabalho", "skills", "contato"];
        const elements = sections.map(id => document.getElementById(id)).filter(Boolean) as Element[];

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

  return (
    <header>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-[#20131F]/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg flex items-center gap-6">
        {links.map((link) => (
            <NavItem
                key={link.href}
                label={link.label}
                href={link.href}
                active={activeSection === link.href.slice(1)}
            />
        ))}
        <ToggleThemeButton/>
      </nav>
    </header>
  );
}

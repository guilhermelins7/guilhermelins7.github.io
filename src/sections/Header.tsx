import { useEffect, useRef, useState } from "react";
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLElement>(null);

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

    useEffect(() => {
        const closeMenuOnOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        const closeMenuOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        const closeMenuOnDesktop = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", closeMenuOnOutsideClick);
        document.addEventListener("keydown", closeMenuOnEscape);
        window.addEventListener("resize", closeMenuOnDesktop);

        return () => {
            document.removeEventListener("mousedown", closeMenuOnOutsideClick);
            document.removeEventListener("keydown", closeMenuOnEscape);
            window.removeEventListener("resize", closeMenuOnDesktop);
        };
    }, []);

  return (
    <header>
      <nav
        ref={menuRef}
        className="fixed top-4 right-4 z-50 md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2"
        aria-label="Navegação principal"
      >
        <div className="hidden md:flex items-center gap-6 bg-white/80 dark:bg-[#20131F]/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg">
          {links.map((link) => (
              <NavItem
                  key={link.href}
                  label={link.label}
                  href={link.href}
                  active={activeSection === link.href.slice(1)}
              />
          ))}
          <ToggleThemeButton/>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-900 shadow-lg backdrop-blur-md transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-[#20131F]/80 dark:text-white dark:hover:bg-surface-dark dark:focus-visible:ring-offset-background-dark"
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="material-icons" aria-hidden="true">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>

          {isMenuOpen && (
            <div
              id="mobile-navigation"
              className="absolute top-full right-0 mt-3 w-56 rounded-2xl border border-gray-200 bg-white/95 p-2 shadow-xl backdrop-blur-md dark:border-gray-700 dark:bg-[#20131F]/95"
            >
              <div className="flex flex-col gap-1">
                {links.map((link) => {
                  const isActive = activeSection === link.href.slice(1);

                  return (
                    <a
                      key={link.href}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-gray-900 hover:bg-primary hover:text-white dark:text-white"
                      }`}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
              <div className="mt-2 border-t border-gray-200 pt-2 dark:border-gray-700">
                <ToggleThemeButton/>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

import NavItem from "../components/NavItem";
import ToggleThemeButton from "../components/ToggleThemeButton";

export default function Header() {
    const links = [
        { label: "Home", href: "#home" },
        { label: "Sobre", href: "#sobre" },
        { label: "Trabalho", href: "#trabalho" },
        { label: "Experiencia", href: "#experiencia" },
        { label: "Skills", href: "#skills" },
        { label: "Entre em contato", href: "#contato" },
    ];

  return (
    <header>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-[#20131F]/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg flex items-center gap-8">
        {links.map((link) => (
            <NavItem
                label={link.label}
                href={link.href}
            />
        ))}
        <ToggleThemeButton/>
      </nav>
    </header>
  );
}

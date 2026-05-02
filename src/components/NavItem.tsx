interface NavItemProps {
    label: string,
    href: string
}

export default function NavItem({label, href}: NavItemProps) {
    return (
        <a
          className="text-sm font-medium rounded-2xl py-2 px-4 hover:text-white hover:bg-primary"
          href={href}
        >
          {label}
        </a>
    )
}
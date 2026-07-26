interface NavItemProps {
    label: string,
    href: string,
    active?: boolean
}

export default function NavItem({label, href, active = false}: NavItemProps) {
    return (
        <a
          className={
            `text-sm font-medium rounded-2xl py-2 px-4 transition-colors ${
              active
                ? "text-white bg-primary"
                : "hover:text-white hover:bg-primary"
            }`
          }
          href={href}
        >
          {label}
        </a>
    )
}
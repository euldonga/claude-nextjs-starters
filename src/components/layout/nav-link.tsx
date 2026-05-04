import Link from "next/link"
import { cn } from "@/lib/utils"

type NavLinkProps = {
  href: string
  active: boolean
  onClick?: () => void
  mobile?: boolean
  children: React.ReactNode
}

export function NavLink({ href, active, onClick, mobile, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-md text-sm transition-colors hover:bg-muted hover:text-foreground",
        mobile ? "flex w-full px-3 py-2" : "px-3 py-1.5",
        active ? "bg-muted text-foreground font-medium" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  )
}

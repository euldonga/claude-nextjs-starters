"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavLink } from "@/components/layout/nav-link"
import { siteConfig } from "@/lib/config"
import { navItems } from "@/lib/constants/navigation"

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Zap className="size-5 text-primary" />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} active={pathname === item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 py-2 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              active={pathname === item.href}
              mobile
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

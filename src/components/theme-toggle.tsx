"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLocalStorage } from "@/hooks/use-local-storage"

export function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light")

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const resolved = theme === "light" && prefersDark ? "dark" : theme
    document.documentElement.classList.toggle("dark", resolved === "dark")
  }, [theme])

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="테마 전환">
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}

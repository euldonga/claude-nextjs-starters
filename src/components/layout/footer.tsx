import Link from "next/link"
import { GitBranch } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. MIT License.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Next.js 16
          </Link>
          <Link
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            shadcn/ui
          </Link>
          {siteConfig.links.github && (
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GitBranch className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
}

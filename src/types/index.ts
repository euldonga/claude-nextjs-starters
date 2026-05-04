export type NavItem = {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    github?: string
    twitter?: string
  }
}

export type FeatureItem = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export type StatItem = {
  label: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ComponentType<{ className?: string }>
}

export type ActivityItem = {
  user: string
  action: string
  time: string
  avatar: string
}

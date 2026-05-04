import { ArrowDown, ArrowUp } from "lucide-react"
import type { StatItem } from "@/types"

export function StatCard({ label, value, change, trend, icon: Icon }: StatItem) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <Icon className="size-4 text-muted-foreground" />
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="mt-1 flex items-center gap-1 text-xs">
        {trend === "up" ? (
          <ArrowUp className="size-3 text-green-600" />
        ) : (
          <ArrowDown className="size-3 text-red-600" />
        )}
        <span className={trend === "up" ? "text-green-600" : "text-red-600"}>{change}</span>
        <span className="text-muted-foreground">지난달 대비</span>
      </div>
    </div>
  )
}

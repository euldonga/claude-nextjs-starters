import type { Metadata } from "next"
import { Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/ui/stat-card"
import { stats, recentActivity, chartHeights, chartMonths } from "@/lib/constants/dashboard"

export const metadata: Metadata = {
  title: "대시보드",
  description: "대시보드 예시 페이지",
}

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
          <p className="text-sm text-muted-foreground">오늘의 현황을 확인하세요.</p>
        </div>
        <Button>
          <Activity className="size-4" />
          리포트 내보내기
        </Button>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chart */}
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-5">
          <h2 className="mb-4 font-semibold">수익 추이</h2>
          <div className="flex h-48 items-end gap-2">
            {chartHeights.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-primary/20 transition-all hover:bg-primary/40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            {chartMonths.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="mb-4 font-semibold">최근 활동</h2>
          <div className="flex flex-col gap-3">
            {recentActivity.map((item) => (
              <div key={item.user + item.time} className="flex items-start gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                  {item.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium">{item.user}</p>
                  <p className="text-xs text-muted-foreground">{item.action}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

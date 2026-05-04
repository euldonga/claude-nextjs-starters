import type { Metadata } from "next"
import {
  AlertCircle,
  Bell,
  Check,
  ChevronRight,
  Heart,
  Info,
  Mail,
  Search,
  Settings,
  Trash2,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "컴포넌트",
  description: "shadcn/ui 컴포넌트 쇼케이스",
}

export default function ComponentsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">컴포넌트 쇼케이스</h1>
        <p className="mt-2 text-muted-foreground">
          shadcn/ui + lucide-react 컴포넌트 예시입니다.
        </p>
      </div>

      <Section title="Button">
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="mt-3 flex flex-wrap gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Heart className="size-4" />
          </Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="mt-3 flex flex-wrap gap-3">
          <Button>
            <Mail className="size-4" />
            이메일 보내기
          </Button>
          <Button variant="outline">
            <Settings className="size-4" />
            설정
          </Button>
          <Button variant="destructive">
            <Trash2 className="size-4" />
            삭제
          </Button>
        </div>
      </Section>

      <Section title="아이콘 (lucide-react)">
        <div className="flex flex-wrap gap-4 text-muted-foreground">
          {[
            { icon: User, name: "User" },
            { icon: Bell, name: "Bell" },
            { icon: Mail, name: "Mail" },
            { icon: Search, name: "Search" },
            { icon: Settings, name: "Settings" },
            { icon: Heart, name: "Heart" },
            { icon: Trash2, name: "Trash2" },
            { icon: AlertCircle, name: "AlertCircle" },
            { icon: Check, name: "Check" },
            { icon: Info, name: "Info" },
            { icon: ChevronRight, name: "ChevronRight" },
          ].map(({ icon: Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <div className="flex size-10 items-center justify-center rounded-md border border-border bg-muted">
                <Icon className="size-5" />
              </div>
              <span className="text-xs text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="카드 패턴">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["기본 카드", "정보 카드", "액션 카드"].map((title, i) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-card p-5 text-card-foreground"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium">{title}</span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                  New
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                카드 컴포넌트 예시입니다. 다양한 콘텐츠를 담을 수 있습니다.
              </p>
              {i === 2 && (
                <div className="mt-4">
                  <Button size="sm" className="w-full">
                    자세히 보기
                    <ChevronRight className="size-3.5" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="배지 & 상태">
        <div className="flex flex-wrap gap-2">
          {[
            { label: "성공", className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
            { label: "경고", className: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
            { label: "오류", className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
            { label: "정보", className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
            { label: "기본", className: "bg-muted text-muted-foreground" },
          ].map((badge) => (
            <span
              key={badge.label}
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.className}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </Section>

      <Section title="알림 패턴">
        <div className="flex flex-col gap-3">
          {[
            { icon: Check, color: "text-green-600", bg: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800", text: "작업이 성공적으로 완료되었습니다." },
            { icon: Info, color: "text-blue-600", bg: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800", text: "새로운 업데이트가 있습니다." },
            { icon: AlertCircle, color: "text-red-600", bg: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800", text: "오류가 발생했습니다. 다시 시도해주세요." },
          ].map(({ icon: Icon, color, bg, text }) => (
            <div key={text} className={`flex items-start gap-3 rounded-lg border p-3 text-sm ${bg}`}>
              <Icon className={`mt-0.5 size-4 shrink-0 ${color}`} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

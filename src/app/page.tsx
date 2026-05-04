import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { features } from "@/lib/constants/features"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-4 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
          <Zap className="size-3.5" />
          Next.js 16 · shadcn/ui · TailwindCSS v4
        </div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          모던 웹 개발을
          <br />
          <span className="text-muted-foreground">빠르게 시작하세요</span>
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          최신 기술 스택이 설정된 스타터 킷입니다. 바로 비즈니스 로직 개발을 시작할 수 있습니다.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/components">
              컴포넌트 보기
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/dashboard">대시보드 예시</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight">포함된 기능</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-border bg-background p-5 transition-shadow hover:shadow-md"
              >
                <feature.icon className="mb-3 size-5 text-muted-foreground" />
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">빠른 시작</h2>
          <p className="mb-8 text-muted-foreground">
            아래 구조를 참고하여 원하는 페이지와 컴포넌트를 추가하세요.
          </p>
          <div className="rounded-lg border border-border bg-muted/50 p-6 text-left font-mono text-sm">
            <pre className="text-muted-foreground">{`src/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 홈 페이지
│   └── (your-pages)/   # 새 페이지 추가
├── components/
│   ├── ui/             # shadcn/ui 컴포넌트
│   └── layout/         # Header, Footer
├── hooks/              # 커스텀 훅
├── lib/
│   ├── utils.ts        # cn() 유틸리티
│   ├── config.ts       # 사이트 설정
│   └── constants/      # 상수 데이터
└── types/
    └── index.ts        # 공통 타입`}</pre>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Blocks, Code2, LayoutDashboard, Palette, Rocket, Zap } from "lucide-react"
import type { FeatureItem } from "@/types"

export const features: FeatureItem[] = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description: "Server Components, Streaming, Server Actions를 기본 지원합니다.",
  },
  {
    icon: Palette,
    title: "shadcn/ui + TailwindCSS v4",
    description: "CSS 변수 기반 테마와 다크 모드를 즉시 사용할 수 있습니다.",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description: "엄격한 타입 설정과 공통 타입 정의가 포함되어 있습니다.",
  },
  {
    icon: Blocks,
    title: "공통 컴포넌트",
    description: "Header, Footer, ThemeToggle 등 레이아웃 컴포넌트가 준비되어 있습니다.",
  },
  {
    icon: LayoutDashboard,
    title: "페이지 예시",
    description: "컴포넌트 쇼케이스와 대시보드 예시 페이지를 포함합니다.",
  },
  {
    icon: Rocket,
    title: "커스텀 Hooks",
    description: "useLocalStorage, useMediaQuery 등 유틸리티 훅이 포함되어 있습니다.",
  },
]

# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 중요: 코드 작성 전 문서 먼저 확인

**이 프로젝트의 Next.js는 기존과 다릅니다.** Next.js 16은 파괴적 변경(breaking changes)이 있으며, API·컨벤션·파일 구조가 학습 데이터와 다를 수 있습니다. 코드를 작성하기 전에 반드시 `node_modules/next/dist/docs/`의 관련 가이드를 먼저 읽고, 지원 중단(deprecation) 알림을 반드시 따르세요.

## 명령어

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 실행 (Next.js core-web-vitals + TypeScript 규칙)
```

테스트 러너는 구성되어 있지 않습니다.

## 아키텍처

**스택:** Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui · Radix UI

### App Router 구조

모든 라우트는 `src/app/` 아래에 위치합니다. 루트 레이아웃(`src/app/layout.tsx`)이 모든 페이지를 `<Header>`와 `<Footer>`로 감싸며, body를 flex 컬럼으로 설정해 푸터가 항상 하단에 고정됩니다. 메타데이터는 `src/lib/config.ts`의 `siteConfig`에서 가져옵니다.

페이지는 기본적으로 Server Component입니다. 브라우저 API나 React 훅이 필요한 컴포넌트는 파일 상단에 `"use client"`를 선언해야 합니다.

### 테마 시스템

다크 모드는 **Provider 없이** 직접 관리됩니다. `ThemeToggle`(`src/components/theme-toggle.tsx`)이 `useLocalStorage` 훅으로 `"light" | "dark"` 값을 저장하고, `document.documentElement.classList`를 직접 토글합니다. `next-themes`나 Context를 사용하지 않습니다.

### 컴포넌트 패턴

- **CVA 변형:** UI 컴포넌트는 `class-variance-authority`를 사용합니다. `src/components/ui/button.tsx`의 `Button`을 기준으로 삼으세요 — `cva()`로 `variant`와 `size`를 정의하고, Radix UI의 `Slot.Root`를 통해 다형성 렌더링을 위한 `asChild` prop을 제공합니다.
- **`cn()` 유틸리티:** 조건부 또는 병합된 클래스 이름에는 항상 `src/lib/utils.ts`의 `cn()`(clsx + tailwind-merge)을 사용하세요.
- **`@/` 별칭**은 `src/`로 해석됩니다(`tsconfig.json` 설정).

### 데이터 및 상수

정적 데이터(네비게이션 항목, 기능 카드, 대시보드 통계)는 `src/lib/constants/`에 위치합니다. 사이트 전역 설정(이름, URL, 링크)은 `src/lib/config.ts`에, 공유 TypeScript 타입은 `src/types/index.ts`에 있습니다.

### Tailwind CSS v4

`globals.css`에서 `@import "tailwindcss"`로 가져옵니다(`tailwind.config.*` 파일 없음). 테마 토큰은 OKLch 색상 공간을 사용하는 CSS 커스텀 프로퍼티로 정의됩니다. `globals.css`의 `@theme inline` 블록에서 CSS 변수를 Tailwind 디자인 토큰에 매핑합니다 — 테마 확장이나 재정의는 설정 파일이 아닌 이곳에서 합니다.

### React 컴파일러

`next.config.ts`에 `reactCompiler: true`가 설정되어 있으며, `babel-plugin-react-compiler`를 통해 React 컴파일러가 활성화됩니다. 컴파일러가 자동으로 메모이제이션을 추론하므로, 꼭 필요한 경우가 아니면 `useMemo`/`useCallback`을 수동으로 작성하지 마세요.

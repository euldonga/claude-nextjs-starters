import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react"
import type { ActivityItem, StatItem } from "@/types"

export const stats: StatItem[] = [
  {
    label: "총 수익",
    value: "₩12,430,000",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "신규 사용자",
    value: "1,284",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    label: "주문 수",
    value: "4,921",
    change: "-2.4%",
    trend: "down",
    icon: ShoppingCart,
  },
  {
    label: "전환율",
    value: "3.6%",
    change: "+1.1%",
    trend: "up",
    icon: TrendingUp,
  },
]

export const recentActivity: ActivityItem[] = [
  { user: "김철수", action: "새 주문을 생성했습니다", time: "2분 전", avatar: "김" },
  { user: "이영희", action: "결제를 완료했습니다", time: "5분 전", avatar: "이" },
  { user: "박지민", action: "리뷰를 작성했습니다", time: "12분 전", avatar: "박" },
  { user: "최민준", action: "회원 가입했습니다", time: "24분 전", avatar: "최" },
  { user: "정수연", action: "주문을 취소했습니다", time: "1시간 전", avatar: "정" },
]

export const chartHeights = [40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 100]

export const chartMonths = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]

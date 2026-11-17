import { PAGES } from '@/config/pages-routes'
import { CalendarDays, LayoutDashboard, ListTodo, Timer } from 'lucide-react'

export const links = [
  { href: PAGES.HOME, label: 'Обзор', icon: LayoutDashboard },
  { href: PAGES.TASKS, label: 'Задачи', icon: ListTodo },
  { href: PAGES.HABITS, label: 'Привычки', icon: CalendarDays },
  { href: PAGES.TIMER, label: 'Таймер', icon: Timer },
  { href: PAGES.TIME_BLOCKING, label: 'Планирование', icon: CalendarDays }
]

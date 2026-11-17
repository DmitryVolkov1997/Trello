import { DashboardLayout } from '@/components/dashboard-layout/DashboardLayout'
import { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>
}

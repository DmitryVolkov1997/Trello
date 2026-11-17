import { ReactNode } from 'react'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

type DashboardLayoutProps = {
  children: ReactNode
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className='min-h-screen grid grid-cols-[1.2fr_6fr]'>
      <Sidebar />
      <main className='min-h-screen'>
        <Header />
        {children}
      </main>
    </div>
  )
}

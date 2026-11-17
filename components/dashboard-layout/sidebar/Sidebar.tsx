import { PAGES } from '@/config/pages-routes'
import { LayoutDashboard, Plus, Settings } from 'lucide-react'
import Link from 'next/link'
import { links } from './links.data'

export const Sidebar = () => {
  return (
    <aside className='min-h-screen border-r border-white/8 bg-[#141822]/90 px-4 py-6'>
      <Link href={PAGES.HOME} className='mb-9 flex items-center gap-3 px-2'>
        <span className='grid size-9 place-items-center rounded-xl bg-teal-300 text-slate-950'>
          <LayoutDashboard size={19} />
        </span>
        <span className='text-lg font-semibold tracking-tight text-white'>Trello</span>
      </Link>

      <Link
        href={PAGES.TASKS}
        className='mb-8 flex items-center justify-center gap-2 rounded-xl bg-teal-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200'
      >
        <Plus size={18} />
        Новая задача
      </Link>

      <p className='mb-3 px-3 text-xs font-medium uppercase tracking-wider text-slate-500'>
        Рабочее пространство
      </p>

      <nav className='space-y-1'>
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className='flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/6 hover:text-white'
          >
            <Icon size={18} strokeWidth={1.8} />
            {label}
          </Link>
        ))}
      </nav>

      <div className='my-6 border-t border-white/8' />

      <Link
        href={PAGES.SETTINGS}
        className='flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/6 hover:text-white'
      >
        <Settings size={18} strokeWidth={1.8} />
        Настройки
      </Link>
    </aside>
  )
}

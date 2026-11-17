import { SITE_NAME } from '@/config/seo.config'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Noto_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import { Providers } from './providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const zen = Noto_Sans({
  variable: '--font-zen',
  subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: 'Trello application'
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${zen.variable} h-full antialiased`}
    >
      <body className='min-h-screen flex flex-col'>
        <Providers>
          <Toaster theme='dark' position='bottom-right' duration={1500} />
          {children}
        </Providers>
      </body>
    </html>
  )
}

import { NO_INDEX_PAGE } from '@/config/seo.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HOME',
  ...NO_INDEX_PAGE
}

export default function Home() {
  return <div>Home</div>
}

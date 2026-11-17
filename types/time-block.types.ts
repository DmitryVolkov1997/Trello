import type { TypeBase } from './root.types'

type TimeBlockRes = TypeBase & {
  name: string
  color?: string
  duration: number
  order: number
}

export type TimeBlockState = Partial<
  Omit<TimeBlockRes, 'createdAt' | 'updatedAt'>
>

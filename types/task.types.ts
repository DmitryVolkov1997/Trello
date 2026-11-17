import type { TypeBase } from './root.types'

enum Priority {
  low,
  medium,
  high
}

export type TaskRes = TypeBase & {
  name: string
  priority?: Priority
  isCompleted: boolean
}

export type TaskFormState = Partial<Omit<TaskRes, 'id' | 'updatedAt'>>

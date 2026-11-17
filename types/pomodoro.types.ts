import type { TypeBase } from './root.types'

export type PomodoroRoundRes = TypeBase & {
  totalSeconds: number
  isCompleted: boolean
}

export type PomodoroSessionRes = TypeBase & {
  isCompleted?: boolean
  rounds?: PomodoroRoundRes[]
}

export type PomodoroSessionState = Partial<
  Omit<PomodoroSessionRes, 'id' | 'updatedAt' | 'createdAt'>
>

export type PomodoroRoundState = Partial<
  Omit<PomodoroSessionRes, 'id' | 'updatedAt' | 'createdAt'>
>

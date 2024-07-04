import { ChangeEvent } from 'react'

export enum CategoryType {
  COMMON = 'comum',
  FAMILY = 'família',
  WORK = 'trabalho',
}

export type TypeQuery = 'category' | 'fav' | 'all'
export type ChangeType = ChangeEvent<HTMLInputElement>
import { Cabin } from './cabin'
import { Customer } from './customer'
import { Reservation } from './reservation'
import { Setting } from './setting'
import { Prepaid } from './prepaid'

export type { Cabin, Customer, Reservation, Setting }

export type RowData = Customer | Cabin | Reservation | Setting | Prepaid

export type ListResponse = {
  count: number
  next: string | null
  previous: string | null
  results: Customer[] | Cabin[] | Reservation[] | Setting[] | Prepaid[]
}
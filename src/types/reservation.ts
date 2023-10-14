import { Cabin } from './cabin'
import { Customer } from './customer'

export type Reservation = {
  id: string
  cabin: Cabin
  customer: Customer
  startDate: string
  endDate: string
  tinaja: boolean
  amount: number
  discount: number
  message: string
  createdAt: string
}

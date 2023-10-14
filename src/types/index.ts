import { Cabin } from './cabin'
import { Customer } from './customer'
import { Reservation } from './reservation'
import { Setting } from './setting'
import { Prepaid } from './prepaid'

export type { Cabin, Customer, Reservation, Setting }

export type DataTypes = {
  cabin: Cabin
  customer: Customer
  reservation: Reservation
  setting: Setting
}

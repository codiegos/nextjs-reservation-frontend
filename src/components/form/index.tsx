import CabinForm from './CabinForm'
import { RowData, Customer, Cabin } from '@/types'
import CustomerForm from './CustomerForm'

interface FormProps {
  type: string | undefined
  rowData?: RowData
}

function Form({ type, rowData }: FormProps) {
  switch (type) {
    case 'customers':
      return <CustomerForm rowData={rowData as Customer} />
    case 'cabins':
    //return <CabinForm rowData={rowData as Cabin} />
    default:
      return null
  }
}
export default Form

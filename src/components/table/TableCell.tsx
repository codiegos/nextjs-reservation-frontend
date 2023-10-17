interface TableCellProps {
  value: React.ReactNode
  type?: string
}

export function TableCell({ value, type }: TableCellProps) {
  if (value === null || value === undefined) {
    return <span>Valor no disponible</span>
  }
  switch (type) {
    case 'price' || 'amount' || 'discount':
      return (
        <span>
          {value.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP',
          })}
        </span>
      )
    case 'color':
      return (
        <div
          className='h-6 w-6 rounded-full ring-1 ring-slate-500 dark:ring-slate-200'
          style={{ backgroundColor: value.toString() }}
        />
      )
    case 'description':
      if (!value) return <span>-</span>
    default:
      return <span>{value}</span>
  }
}

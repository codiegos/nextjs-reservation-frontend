import React, { useCallback, useMemo } from 'react'
import { ChevronsIcon } from '@/components/icons'
import { PaginationButton } from '../button'

interface PaginationNavProps {
  gotoPage: (pageIndex: number) => void
  canPreviousPage: boolean
  canNextPage: boolean
  totalCount: number // Total de elementos en la base de datos
  pageIndex: number // Estado iniciado en 1
  itemsPerPage?: number
}

export default function Pagination({
  gotoPage,
  canPreviousPage,
  canNextPage,
  totalCount,
  pageIndex,
  itemsPerPage = 8,
}: PaginationNavProps) {
  // Cambia esto según la cantidad de elementos por página que utilices

  const totalPages = useMemo(
    () => Math.ceil(totalCount / itemsPerPage),
    [totalCount, itemsPerPage],
  )

  const renderPageLinks = useCallback(() => {
    if (totalPages === 0) return null
    const visiblePageButtonCount = 4
    const pageIndices = []

    // Ajusta el rango de páginas para que sea relativo a pageIndex
    const startIndex = Math.max(pageIndex - visiblePageButtonCount / 2, 1)
    const endIndex = Math.min(
      startIndex + visiblePageButtonCount - 1,
      totalPages,
    )

    for (let i = startIndex; i <= endIndex; i++) {
      pageIndices.push(i)
    }

    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <PaginationButton
          content={pageIndexToMap}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ))
  }, [gotoPage, totalPages, pageIndex])

  return (
    <ul className='flex gap-2 rounded-full border border-primary-100 dark:border-slate-700'>
      <li>
        <PaginationButton
          content={<ChevronsIcon className='mr-1 h-6 w-6 scale-x-[-1]' />}
          onClick={() => gotoPage(1)} // Ir a la primera página
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <PaginationButton
          content={<ChevronsIcon className='ml-1 h-6 w-6' />}
          onClick={() => gotoPage(totalPages)} // Ir a la última página
          disabled={!canNextPage}
        />
      </li>
    </ul>
  )
}

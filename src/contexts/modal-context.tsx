'use client'
import { createContext, useReducer, Dispatch } from 'react'

// Define el tipo para el estado
interface ModalState {
  modalMode: string | null
  isModalOpen: boolean
  // Otros estados relacionados con el modal
}

type ModalMode = 'create' | 'edit' | 'delete'
// Define el tipo para las acciones
type ModalAction =
  | { type: 'SET_MODAL_MODE'; payload: ModalMode }
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' }

// Define el estado inicial
const initialState: ModalState = {
  modalMode: null,
  isModalOpen: false,
  // Otros estados relacionados con el modal
}

// Define el Reducer como un objeto que mapea las acciones a funciones
const modalReducerActions = {
  SET_MODAL_MODE: (state: ModalState, action: ModalAction) => ({
    ...state,
    modalMode:
      action.type === 'SET_MODAL_MODE' ? action.payload : state.modalMode,
  }),
  OPEN_MODAL: (state: ModalState) => ({ ...state, isModalOpen: true }),
  CLOSE_MODAL: (state: ModalState) => ({ ...state, isModalOpen: false }),
}

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  if (modalReducerActions[action.type]) {
    return modalReducerActions[action.type](state, action)
  }
  return state
}

// Crea el contexto
export const ModalContext = createContext<{
  state: ModalState
  dispatch: Dispatch<ModalAction>
}>({
  state: initialState,
  dispatch: () => {},
})

// Proveedor del contexto
import { ReactNode } from 'react'

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState)

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  )
}

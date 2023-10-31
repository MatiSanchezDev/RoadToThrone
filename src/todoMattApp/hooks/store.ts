import { type TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { type appDispatch, type RootState } from '../../store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => appDispatch = useDispatch

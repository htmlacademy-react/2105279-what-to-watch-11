//Библиотеки
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

//Типы
import { StateType } from '../types/store';
import { AppDispatch } from '../types/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;

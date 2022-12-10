//Библиотеки
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

//Типы
import { StoreType } from '../types/store';
import { AppDispatch } from '../types/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

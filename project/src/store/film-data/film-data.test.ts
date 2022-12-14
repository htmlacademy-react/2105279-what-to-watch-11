import { filmsData, initialState, addViewCardCount, setViewCardCount } from './film-data';
import { FilmsData } from '../../types/store';

describe('Reducer: data', () => {
  let state: FilmsData;

  beforeEach(() => {
    state = initialState;
  });

  test('Без дополнительных параметров должен возвращать исходное состояние', () => {
    expect(filmsData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  test('Увеличивает viewCardCount с 8 до 16', () => {
    expect(filmsData.reducer(state, { type: addViewCardCount }))
      .toEqual({ ...state, viewCardCount: 16 });
  });

  test('Устанавливает viewCardCount значение 4', () => {
    expect(filmsData.reducer(state, { type: setViewCardCount, payload: 4 }))
      .toEqual({ ...state, viewCardCount: 4 });
  });
});

import { userProcess, requireAuthorization } from './user-process';
import { UserProcess } from '../../types/store';
import { AuthorizationStatus } from '../../const';

describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = { authorizationStatus: AuthorizationStatus.Unknown };
  });

  it('Без дополнительных параметров должен возвращать исходное состояние', () => {
    expect(userProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({ authorizationStatus: AuthorizationStatus.Unknown });
  });

  describe('requireAuthorization test', () => {
    it('Обновляет статус до авторизованного', () => {
      expect(userProcess.reducer(state, { type: requireAuthorization, payload: AuthorizationStatus.Auth }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Auth });
    });

    it('Обновляет статус до не авторизованного', () => {
      expect(userProcess.reducer(state, { type: requireAuthorization, payload: AuthorizationStatus.NoAuth }))
        .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth });
    });
  });
});

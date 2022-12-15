import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/store';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization:
      (state, action: PayloadAction<AuthorizationStatus>) => {
        state.authorizationStatus = action.payload;
      }
  },
});

export const { requireAuthorization } = userProcess.actions;

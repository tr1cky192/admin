import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'App/store';

type AuthState = {
  token: string | null;
}

const initialState: AuthState = {
  token: null, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export const tokenReducer = authSlice.reducer;
export const selectEmailSlice = (state: RootState) => state.enterToken.token;
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'App/store';

type AuthState = {
  isLoggedIn: boolean;
  token: null;
};
const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectIsLoggedIn = (state: RootState): boolean => state.auth.isLoggedIn;


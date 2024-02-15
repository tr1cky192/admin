import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'App/store';

type Themes = 'light' | 'dark';

type ThemeState = {
  activeTheme: Themes;
};

const initialState: ThemeState = {
  activeTheme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Themes>) {
      state.activeTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
export const selectActiveTheme = (state: RootState) => state.theme.activeTheme;

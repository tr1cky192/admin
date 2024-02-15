import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'App/store';
import type { SelectCountryType } from 'types/apis';

type CountryState = {
  activeCountryId: SelectCountryType;
};

const initialState: CountryState = {
  activeCountryId: undefined,
};

const countriesSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setActiveCountryId(state, { payload }: PayloadAction<SelectCountryType>) {
      state.activeCountryId = payload;
    },
  },
});

export const { setActiveCountryId } = countriesSlice.actions;
export const countryReducer = countriesSlice.reducer;
export const selectActiveCountryId = (state: RootState) => state.country.activeCountryId;

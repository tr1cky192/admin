import type { FinanceState, FinancialData } from 'types/apis/finance';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { fetchFinanceStatistic } from './financeOperation';

const financeInitialState: FinanceState = {
  finances: {
    bonusFundsOnHoteliersAccounts: 0,
    fundsOnHotelierAccounts: 0,
    grossHotelRevens: 0,
    hoteliersHavePaid: 0,
    hoteliersPaidWithBonuses: 0,
    refundsOfUnspentMoneyToHoteliers: 0,
  },
  isLoadingFinance: false,
  error: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState: financeInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFinanceStatistic.pending, state => {
        state.isLoadingFinance = true;
      })
      .addCase(
        fetchFinanceStatistic.fulfilled,
        (state, { payload }: PayloadAction<FinancialData>) => {
          state.isLoadingFinance = false;
            state.finances = { ...payload};
        }
      )
      .addCase(fetchFinanceStatistic.rejected, (state, { payload }) => {
        state.isLoadingFinance = false;
        state.error = payload;
      });
  },
});

export const financeReducer = financeSlice.reducer;

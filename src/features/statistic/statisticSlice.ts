import type { StatisticState, ResponseStatisticData } from 'types/apis/statistic';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { fetchStatistic } from './statisticOperation';

const statisticInitialState: StatisticState = {
  statistic: {
    result: {
      objectOnVerification: 0,
      amount: {
        users: 0,
        hoteliers: 0,
        agents: 0,
      },
      activeObject: 0,
      amountOfBookingOption: 0,
    },
  },

  isLoadingStatistic: false,
  error: null,
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState: statisticInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchStatistic.pending, state => {
        state.isLoadingStatistic = true;
      })
      .addCase(
        fetchStatistic.fulfilled,
        (state, { payload }: PayloadAction<ResponseStatisticData>) => {
          state.isLoadingStatistic = false;
          state.statistic = { ...payload };
        }
      )
      .addCase(fetchStatistic.rejected, (state, { payload }) => {
        state.isLoadingStatistic = false;
        state.error = payload;
      });
  },
});

export const statisticReducer = statisticSlice.reducer;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ResponseStatisticData } from 'types/apis/statistic';
import { baseUrl, endpoints } from 'features/api';
import type { RootState } from 'App/store';

export const fetchStatistic = createAsyncThunk<ResponseStatisticData>(
  'statistic/fetchStatistic',
  async (_, { rejectWithValue, getState }) => {
    try {
      const authToken = getState() as RootState;

      const response = await axios.get(`${baseUrl}/acsess-to-admin${endpoints.statistic}`, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${authToken.enterToken.token!}`,
        },
        withCredentials: true,
      });
      const data = response.data as ResponseStatisticData;
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

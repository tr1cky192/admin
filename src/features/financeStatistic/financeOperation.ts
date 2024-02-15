
import type { FinancialData, ResponseFinanceData } from 'types/apis/finance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl, endpoints } from 'features/api';
import axios from 'axios';
import type { RootState } from 'App/store';

export const fetchFinanceStatistic = createAsyncThunk<FinancialData>(
  'finance/fetchFinanceStatistic',
  async (_, { rejectWithValue, getState }) => {
    try {
      const authToken = getState() as RootState;

      const response = await axios.get(`${baseUrl}/acsess-to-admin${endpoints.financeStatistic}`, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${authToken.enterToken.token!}`,
        },
        withCredentials: true,
      });
      const data = response.data as ResponseFinanceData;
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

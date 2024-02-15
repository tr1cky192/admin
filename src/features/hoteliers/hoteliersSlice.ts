import type { HoteliersState, HotelsObjects, ResponseData, HotelierFetch } from 'types/apis';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { fetchBonus, fetchHoteliers, fetchHotelsById } from './hoteliersOperation';


const hoteliersInitialState: HoteliersState = {
  hoteliers: [],
  isLoadingHoteliers: false,
  isLoadingHotels: false,
  error: null,
};


const hoteliersSlice = createSlice({
  name: 'hoteliers',
  initialState: hoteliersInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHoteliers.pending, state => {
        state.isLoadingHoteliers = true;
      })
      .addCase(fetchHoteliers.fulfilled, (state, { payload }: PayloadAction<HotelierFetch[]>) => {
        state.isLoadingHoteliers = false;
        state.hoteliers = payload.map(hotelier => ({
          owner: hotelier._id,
          status: hotelier.status,
          yourObjects: hotelier.yourObjects,
          finances: hotelier.finances,
        }));
      })
      .addCase(fetchHoteliers.rejected, (state, { payload }) => {
        state.isLoadingHoteliers = false;
        state.error = payload;
      })
      .addCase(fetchHotelsById.pending, state => {
        state.isLoadingHotels = true;
      })
      .addCase(fetchHotelsById.fulfilled, (state, { payload }: PayloadAction<HotelsObjects>) => {
        state.isLoadingHotels = false;
        state.hoteliers = state.hoteliers.map(hotelier =>
          hotelier.owner === payload.ownerId ? { ...hotelier, hotels: payload.hotels } : hotelier
        );
      })
      .addCase(fetchHotelsById.rejected, (state, { payload }) => {
        state.isLoadingHotels = false;
        state.error = payload;
      })
      .addCase(fetchBonus.pending, state => {
        state.isLoadingHotels = true;
      })
      .addCase(fetchBonus.fulfilled, (state, { payload }: PayloadAction<ResponseData>) => {
        state.isLoadingHotels = false;
        state.hoteliers = state.hoteliers.map(hotelier =>
          hotelier.owner === payload.data.result._id
            ? {
                ...hotelier,
                finances: {
                  ...hotelier.finances,
                  bonus: payload.data.result.finances.bonus,
                  total: payload.data.result.finances.total,
                },
              }
            : hotelier
        );
      })
      .addCase(fetchBonus.rejected, (state, { payload }) => {
        state.isLoadingHotels = false;
        state.error = payload;
      });
      
  },
});

export const hoteliersReducer = hoteliersSlice.reducer;

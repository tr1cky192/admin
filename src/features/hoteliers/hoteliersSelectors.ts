import type { RootState } from "App/store";


export const selectorHoteliers = (state: RootState) => state.hoteliers
export const selectorBonusHoteliers = (state: RootState) => state.hoteliers.hoteliers;





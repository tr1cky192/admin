export type Finances = {
  currency?: string | undefined;
  bonus?: number;
  money?: number;
  total?: number;
};

export type HotelierFetch = {
  finances: Finances;
  status: string;
  yourObjects: number;
  _id: string;
};

export type HotelFetch = string[]
  
export type DataHoteliers = {
  code: number;
  status: string;
  data: { result: [] };
};

export type DataHotels = {
  code: number;
  data: { result: [] };
  status: string;
};

export type Hoteliers = {
  owner: string;
  status: string;
  hotels?: string[] | undefined;
  yourObjects?: number | undefined;
  finances?: Finances;
}[];

export type HoteliersState = {
  hoteliers: Hoteliers;
  isLoadingHoteliers: boolean;
  isLoadingHotels: boolean;
  error: null | unknown;
};

export type HoteliersSelector = {
  hoteliers: {
    hoteliers: [];
    isLoading: boolean;
    error: null | unknown
  };
};

export type HotelsObjects = {
  ownerId: string;
  hotels: HotelFetch;
};

export type ResponseData = {
  status: string;
  code: number;
  data: {
    result: {
      finances: {
        currency: string;
        bonus: number;
        money: number;
        total: number;
      };
      _id: string;
      lastName: string;
      firstName: string;
      email: string;
      language: string;
      secretCode: string;
      status: string;
      createdCode: number;
      validCode: number;
    };
  };
};

export type DataBonus = {
  id: string;
  amount: number;
};





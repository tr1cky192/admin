export type StatisticData = {
  objectOnVerification: number;
  amount: {
    users: number;
    hoteliers: number;
    agents: number;
  };
  activeObject: number;
  amountOfBookingOption: number;
};

export type ResponseStatisticData = {
  code: number;
  result: StatisticData;
  status: string;
};

export type StatisticState = {
  statistic: {
    result: {
      objectOnVerification: number;
      amount: {
        users: number;
        hoteliers: number;
        agents: number;
      };
      activeObject: number;
      amountOfBookingOption: number;
    };
  };
  isLoadingStatistic: boolean;
  error: null | unknown;
};

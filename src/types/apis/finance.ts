export type FinancialData = {
  fundsOnHotelierAccounts: number;
  bonusFundsOnHoteliersAccounts: number;
  refundsOfUnspentMoneyToHoteliers: number;
  grossHotelRevens: number;
  hoteliersPaidWithBonuses: number;
  hoteliersHavePaid: number;
};

export type ResponseFinanceData = {
  code: number;
  data: FinancialData;
  status: string;
};

export type FinanceState = {
  finances: FinancialData;
  isLoadingFinance: boolean;
  error: null | unknown;
};
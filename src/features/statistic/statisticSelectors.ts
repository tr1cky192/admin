import type { RootState } from 'App/store';

export const getStatistic = (state: RootState) => state.statistic.statistic;

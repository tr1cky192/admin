import { WrapperHeader } from './StatisticsHeader.styled';

type Prop = {
  type: string;
  isShowHotelier?: number | null;
  isShowUsers?: number | null;
};

export const StatisticsHeader: React.FC<Prop> = ({ type, isShowHotelier, isShowUsers }) => {
  let headerText = '';

  if (type === 'Statistic') {
    headerText = 'All statistic';
  } else if (type === 'Hoteliers') {
    if (typeof isShowHotelier !== 'number') {
      headerText = 'Hoteliers:';
    } else {
      headerText = 'Facility finances:';
    }
  } else if (type === 'Users') {
    if (typeof isShowUsers !== 'number') {
      headerText = 'Users:';
    }
  }

  return <WrapperHeader type={type}>{headerText}</WrapperHeader>;
};

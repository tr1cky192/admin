import { useGetAllObjectsHoteilerQuery } from 'features/catalogForHotelier/addCatalogApi';
import { selectActiveLangCode } from 'features/languages';
import { useSelector } from 'react-redux';
import type { EntityId } from '@reduxjs/toolkit';
import { AddDistrictForm } from './AddDistrictForm';
import { DistrictsStyled } from './Districts.styled';
import { DistrictsList } from './DistrictsList';

type DistrictsProps = {
  cityId: EntityId;
  stateId: EntityId;
};

type TP = 'getAllEnPages' | 'getAllUaPages' | 'getAllPlPages' | 'getAllRuPages';

export const Districts = ({ cityId, stateId }: DistrictsProps) => {
  const activeLangCode = useSelector(selectActiveLangCode);
  const { data } = useGetAllObjectsHoteilerQuery(`${String(activeLangCode?.toLowerCase())}`);

  // TODO: потрібно констант value для кращого майбутнього розширення
  const getIndexPage = () => {
    let value: TP = 'getAllEnPages';
    if (activeLangCode === 'UA') {
      value = 'getAllUaPages';
    } else if (activeLangCode === 'PL') {
      value = 'getAllPlPages';
    } else if (activeLangCode === 'RU') {
      value = 'getAllRuPages';
    }

    return (data ? data[value] : undefined)!;
  };

  return (
    <DistrictsStyled>
      <DistrictsList cityId={cityId} stateId={stateId} data={getIndexPage()} />
      <AddDistrictForm cityId={cityId} stateId={stateId} />
    </DistrictsStyled>
  );
};

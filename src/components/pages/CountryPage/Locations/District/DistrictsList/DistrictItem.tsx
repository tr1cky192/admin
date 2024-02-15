import type { EntityId } from '@reduxjs/toolkit';
import type { DataObject } from 'types/addLocation';
import { EditDistrictForm } from '../EditDistrictForm/EditDistrictForm';
import { DistrictItemStyled } from './DistrictsList.styled';

export type DistrictItemProps = {
  districtId: EntityId;
  cityId: EntityId;
  stateId: EntityId;
  data: DataObject;
};

export const DistrictItem = ({ districtId, cityId, stateId, data }: DistrictItemProps) => (
  <DistrictItemStyled>
    <EditDistrictForm districtId={districtId} cityId={cityId} stateId={stateId} data={data} />
  </DistrictItemStyled>
);

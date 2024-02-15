import type { EntityId, EntityState } from '@reduxjs/toolkit';

export type District = {
  stateId: EntityId;
  cityId: EntityId;
  cityInternational: string;

  _id: EntityId;
  districtName: string;
  districtInternational: string;
  districtCode: string;
  districtPhotoURL: string;
  districtPhotoAlt: string;

  langCode: string;
  dbLangCode: string;
  createdAt: string;
  updatedAt: string;
};

export type GetDistrict = EntityId;
export type AddDistrict = Omit<District, '_id' | 'createdAt' | 'updatedAt'>;
export type EditDistrict = Omit<District, 'createdAt' | 'updatedAt' | 'dbLangCode'>;
export type DeleteDistrict = EntityId;

export type DistrictsEntity = EntityState<District>;
export type MaybeDistrictsEntity = DistrictsEntity | undefined;

export type FindDistrict = Pick<District, 'cityId'>;

export type DistrictResponse = District[] | [];

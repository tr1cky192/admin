import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { District } from './district';

export type City = {
  stateId: EntityId;
  stateInternational: string;

  _id: EntityId;
  cityName: string;
  cityInternational: string;
  cityCode: string;
  cityPhotoURL: string;
  cityPhotoAlt: string;

  langCode: string;

  districts: District[];
  createdAt: string;
  updatedAt: string;
};

export type CityWithDistrictsIds = {
  stateId: EntityId;
  stateInternational: string;

  _id: EntityId;
  cityName: string;
  cityInternational: string;
  cityCode: string;
  cityPhotoURL: string;
  cityPhotoAlt: string;
  langCode: string;

  districts: EntityId[];
  createdAt: string;
  updatedAt: string;
};

export type AddCity = Pick<
  City,
  | 'stateId'
  | 'cityName'
  | 'cityInternational'
  | 'cityCode'
  | 'cityPhotoURL'
  | 'cityPhotoAlt'
  | 'langCode'
  | 'stateInternational'
>;

export type EditCity = Pick<
  City,
  | 'stateId'
  | 'stateInternational'
  | '_id'
  | 'cityName'
  | 'cityInternational'
  | 'cityPhotoURL'
  | 'cityPhotoAlt'
  | 'cityCode'
  | 'langCode'
>;
export type DeleteCity = EntityId;

export type CitiesResponse = City[] | [];

export type MaybeCitiesEntity = EntityState<CityWithDistrictsIds> | undefined;

export type FindCity = { stateId: string };

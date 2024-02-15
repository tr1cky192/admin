import type { FormEvent } from 'react';
import type { EntityId, EntityState } from '@reduxjs/toolkit';

export type SelectCountryType = EntityId | undefined;
export type OnSubmitFormType = { onSubmit: (e: FormEvent<HTMLFormElement>) => void };
export type OnSubmitType = (e: FormEvent<HTMLFormElement>) => void;

export type Country = {
  _id: EntityId;
  international: string;
  country: string;

  langCode: string;
  dbLangCode: string;

  states: EntityId[];
  createdAt: string;
  updatedAt: string;
};

export type AddCountry = Pick<Country, 'country' | 'international' | 'langCode'>;
export type EditCountry = Pick<Country, '_id' | 'country' | 'langCode' | 'international'>;

export type CountriesResponse = Country[] | [];

export type CountriesEntity = EntityState<Country>;
export type MaybeCountriesEntity = CountriesEntity | undefined;

export type GetCountry = EntityId;
export type DeleteCountry = EntityId;

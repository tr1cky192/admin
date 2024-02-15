import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { Country } from './countries';

export type SelectLanguageType = EntityId | undefined;
export type LanguageWithoutCountries = SelectLanguageType[];
export type SelectLangType = (arg: SelectLanguageType) => void;

export type Language = {
  _id: EntityId;
  lang: string;
  code: string;
  dbLangCode: string;

  countries: Country[];
  createdAt: string;
  updatedAt: string;
};

export type LanguageWithCountriesIds = {
  _id: EntityId;
  lang: string;
  code: string;
  dbLangCode: string;

  countries: EntityId[];
  createdAt: string;
  updatedAt: string;
};

export type LanguagesEntity = EntityState<LanguageWithCountriesIds>;
export type MaybeLanguagesEntity = LanguagesEntity | undefined;

export type LanguagesResponse = Language[] | [];

export type AddLanguage = Pick<Language, 'lang' | 'code'>;
export type EditLanguage = Pick<Language, '_id' | 'lang' | 'code'>;

export type GetLanguage = EntityId;
export type DeleteLanguage = EntityId;

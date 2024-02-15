import type { District } from './district';
import type { City, CityWithDistrictsIds } from './cities';
import type { State, StateWithCitiesIds } from './states';
import type { Country } from './countries';
import type { Language } from './languages';

export type ManyDistricts = { data?: { districts?: District[] } };
export type ManyCities = { data?: { cities?: City[] } };
export type ManyStates = { data?: { states?: State[] } };
export type ManyCountries = { data?: { countries?: Country[] } };
export type ManyLanguages = { data?: { languages?: Language[] } };

export type OneDistrict = { data?: { district?: District } };
export type OneCity = { data?: { city?: CityWithDistrictsIds } };
export type OneState = { data?: { state?: StateWithCitiesIds } };
export type OneCountry = { data?: { country?: Country } };
export type OneLanguage = { data?: { language?: Language } };

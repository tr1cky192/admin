import type {
  ManyDistricts,
  ManyCities,
  ManyStates,
  ManyCountries,
  ManyLanguages,
  OneDistrict,
  OneCity,
  OneState,
  OneCountry,
  LanguageWithCountriesIds,
} from 'types/apis';
import { frozenArr } from './api';

export const getManyLanguages = ({ data: { languages } = {} }: ManyLanguages = {}) =>
  languages ?? frozenArr;
export const getManyCountries = ({ data: { countries } = {} }: ManyCountries = {}) =>
  countries ?? frozenArr;
export const getManyStates = ({ data: { states } = {} }: ManyStates = {}) => states ?? frozenArr;
export const getManyCities = ({ data: { cities } = {} }: ManyCities = {}) => cities ?? frozenArr;
export const getManyDistricts = ({ data: { districts } = {} }: ManyDistricts = {}) =>
  districts ?? frozenArr;

export type OneLanguageInArray = { data?: { language?: LanguageWithCountriesIds[] } };
export const getOneLanguage = ({ data: { language } = {} }: OneLanguageInArray = {}) =>
  language?.[0];
export const getOneCountry = ({ data: { country } = {} }: OneCountry = {}) => country;
export const getOneState = ({ data: { state } = {} }: OneState = {}) => state;
export const getOneCity = ({ data: { city } = {} }: OneCity = {}) => city;
export const getOneDistrict = ({ data: { district } = {} }: OneDistrict = {}) => district;

export const getOneLanguageId = (result?: OneLanguageInArray) => getOneLanguage(result)?._id;
export const getOneCountryId = (result?: OneCountry) => getOneCountry(result)?._id;
export const getOneStateId = (result?: OneState) => getOneState(result)?._id;
export const getOneCityId = (result?: OneCity) => getOneCity(result)?._id;
export const getOneDistrictId = (result?: OneDistrict) => getOneDistrict(result)?._id;

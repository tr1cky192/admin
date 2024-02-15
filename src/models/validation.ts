import type { MaybeLanguagesEntity } from 'types/apis';
import { array, object, string } from 'yup';

export const addStateSchema = object({
  stateName: string()
    .min(1, 'stateName min 1 char')
    .max(1024, 'stateName max 1024 char')
    .required('stateName is required'),
  statePhotoUrl: string()
    .url()
    .min(12, 'statePhotoUrl min 12 char')
    .max(1024, 'statePhotoUrl max 1024 char')
    .required('statePhotoUrl is required'),
});

export const normalizedLanguageSchema = object({
  ids: array().of(string().min(1).max(1024)),
  entities: object({
    _id: string().min(1).max(1024, '_id is too long').required('_id is required'),
    lang: string().min(1).max(30).required(),
    code: string().min(1).max(20).required(),
    dbLangCode: string().optional(),

    countries: array().of(string().min(1).max(1024)),
    createdAt: string().min(1).max(1024).optional(),
    updatedAt: string().min(1).max(1024).optional(),
  }),
});

export const isLanguage = async (arg: MaybeLanguagesEntity) =>
  normalizedLanguageSchema.validate(arg);

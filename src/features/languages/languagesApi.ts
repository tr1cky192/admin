import type { AddLanguage, EditLanguage, ManyLanguages, MaybeLanguagesEntity } from 'types/apis';
import type { OneLanguageInArray } from 'features/api';
import { api, endpoints, tag, tagList } from 'features/api';
import { saveOneLanguage, saveManyLanguages } from './languagesAdapter';

export const languagesApi = api.injectEndpoints({
  endpoints: build => ({
    getLanguages: build.query<MaybeLanguagesEntity, void>({
      query: () => endpoints.languages,
      transformResponse: (result?: ManyLanguages) => saveManyLanguages(result),
      providesTags: result => tagList(result, 'Language'),
    }),

    // getLanguage: build.query<MaybeLanguagesEntity, GetLanguage>({
    //   query: id => `${endpoints.languages}/${id}`,
    //   transformResponse: (result?: OneLanguageInArray) => saveOneLanguage(result),
    //   providesTags: (_, __, id) => tag(id, 'Language'),

    addLanguage: build.mutation<MaybeLanguagesEntity, AddLanguage>({
      query: body => ({
        url: endpoints.languages,
        method: 'POST',
        body,
      }),
      transformResponse: (result?: OneLanguageInArray) => saveOneLanguage(result),
    }),
    editLanguage: build.mutation<MaybeLanguagesEntity, EditLanguage>({
      query: ({ _id, ...body }) => ({
        url: `${endpoints.languages}/${_id}`,
        method: 'PATCH',
        body,
      }),
      transformResponse: (result?: OneLanguageInArray) => saveOneLanguage(result),
      invalidatesTags: (_, __, { _id }) => tag(_id, 'Language'),
    }),
  }),
});

export const {
  useGetLanguagesQuery,
  useLazyGetLanguagesQuery,
  useAddLanguageMutation,
  useEditLanguageMutation,
} = languagesApi;

/** returns the query result object */
export const selectLanguagesResult = languagesApi.endpoints.getLanguages.select();

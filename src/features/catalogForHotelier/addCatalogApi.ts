import type { IAllObjectHotelier, AddLocation, IResponseAddLocation } from 'types/addLocation';
import { api, endpoints } from '../api/api';

const catalogApi = api.injectEndpoints({
  endpoints: build => ({
    getAllObjectsHoteiler: build.query<IAllObjectHotelier, string>({
      query: lang => ({
        url: endpoints.catalogForHotelier,
        params: {
          language: lang,
        },
      }),
      providesTags: () => ['AddLocation'],
    }),
    addCityToHoteiler: build.mutation<IResponseAddLocation, AddLocation>({
      query: body => ({
        url: endpoints.catalogForHotelier,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AddLocation'],
    }),
  }),
});

export const { useAddCityToHoteilerMutation, useGetAllObjectsHoteilerQuery } = catalogApi;
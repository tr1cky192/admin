import { api, endpoints, tag, tagList } from 'features/api';
import type {
  AddDistrict,
  EditDistrict,
  GetDistrict,
  ManyDistricts,
  MaybeDistrictsEntity,
  OneDistrict,
} from 'types/apis';
import { saveManyDistricts, saveOneDistrict } from './districtsAdapter';

const districtsApi = api.injectEndpoints({
  endpoints: build => ({
    getDistricts: build.query<MaybeDistrictsEntity, void>({
      query: () => endpoints.locationDistrict,
      transformResponse: (result: ManyDistricts) => saveManyDistricts(result),
      providesTags: result => tagList(result, 'District'),
    }),
    getDistrict: build.query<MaybeDistrictsEntity, GetDistrict>({
      query: id => `${endpoints.locationDistrict}/${id}`,
      transformResponse: (result: OneDistrict) => saveOneDistrict(result),
      providesTags: (_, __, id) => tag(id, 'District'),
    }),
    addDistrict: build.mutation<MaybeDistrictsEntity, AddDistrict>({
      query: body => ({
        url: endpoints.locationDistrict,
        method: 'POST',
        body,
      }),
      transformResponse: (result: OneDistrict) => saveOneDistrict(result),
    }),
    editDistrict: build.mutation<MaybeDistrictsEntity, EditDistrict>({
      query: ({ _id, ...body }) => ({
        url: `${endpoints.locationDistrict}/${_id}`,
        method: 'PATCH',
        body,
      }),
      transformResponse: (result: OneDistrict) => saveOneDistrict(result),
      // invalidatesTags: (_, __, { _id }) => tag(_id, 'District'),
    }),
  }),
});

export const {
  useGetDistrictsQuery,
  useLazyGetDistrictsQuery,
  useAddDistrictMutation,
  useEditDistrictMutation,
} = districtsApi;

export const selectDistrictsResult = districtsApi.endpoints.getDistricts.select();

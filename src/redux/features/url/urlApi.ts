import { SearchParams } from "@/lib";
import baseApi from "@/redux/baseApi";
import { TApiSearchParams } from "@/types";

const urlApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUrl: builder.mutation({
      query: (body) => ({
        url: "/url",
        method: "POST",
        body,
      }),
      invalidatesTags: ["url"],
    }),
    allURLCustomer: builder.query({
      query: (searchParams: TApiSearchParams) => ({
        url: "/url/customer",
        params: SearchParams(searchParams),
      }),
      providesTags: () => ["url"],
    }),
    allTagsForCustomer: builder.query({
      query: () => `/url/tags/customer`,
      providesTags: () => ["url"],
    }),
  }),
});

export const {
  useCreateUrlMutation,
  useAllTagsForCustomerQuery,
  useAllURLCustomerQuery,
} = urlApi;
